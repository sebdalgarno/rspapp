<script>
  export let data_year;
  export let year;
  export let data_total;
  export let year_min;

  let totals;
  $: totals = data_total.map(function (el) {
    return el.total;
  });

  function prepThousand(num) {    
    return +(Math.round(num/1000));
}

function prepMillion(num) {    
    return +(Math.round(num/1000000 + "e+1")  + "e-1");
}

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  // function numberWithCommas(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  let logged_total;
  $: logged_total = prepMillion(sumValues(totals));

  let logged_year;
  $: logged_year = prepThousand(data_year[0].total);
</script>

<div class="">
  <!-- <span class="text"> Around</span> -->
  <span class="logged">{logged_year} thousand</span>
  <span class="text"> hectares logged in</span>
  <span class="year">{year}</span>
  <br />
  <span class="logged">{logged_total} million</span>
  <span class="text"> hectares logged from</span>
  <span class="year">{year_min}</span>
  <span class="text">to</span>
  <span class="year">{year}</span>
</div>

<style>
  .logged {
    @apply text-green-600 text-xl;
  }
  .year {
    @apply text-indigo-700 text-xl;
  }
  .text {
     @apply text-gray-800;   
    }
</style>
