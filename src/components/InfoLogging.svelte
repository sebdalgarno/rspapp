<script>
  export let data_year;
  export let year;
  export let data_total;
  export let year_min;

  let totals;
  $: totals = data_total.map(function (el) {
    return el.total;
  });

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let logged_total;
  $: logged_total = numberWithCommas(sumValues(totals));

  let logged_year;
  $: logged_year = numberWithCommas(data_year[0].total);
</script>

<div class="">
  <span class="logged">{logged_year}</span>
  <span class="text">hectares logged in</span>
  <span class="year">{year}</span>
  <br />
  <span class="logged">{logged_total}</span>
  <span class="text">hectares logged from</span>
  <span class="year">{year_min}</span>
  <span class="text">to</span>
  <span class="year">{year}</span>
</div>

<style>
  .logged {
    @apply text-red-500 text-xl;
  }
  .year {
    @apply text-indigo-700 text-xl;
  }
  .text {
     @apply text-gray-800;   
    }
</style>
