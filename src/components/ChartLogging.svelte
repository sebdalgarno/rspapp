<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  export let year;
  export let year_min;
  export let data_year;
  export let data_total;
  export let palette;

  let initial_totals;
  let initial_labels;

  initial_totals = data_total.map(function (el) {
    return el.total;
  });

  initial_labels = data_total.map(function (el) {
    return el.year;
  });
  
  let yeardiff
  $: if(year){
    yeardiff = year - year_min + 1;
  } 

  let new_palette = [];
  $: new_palette = palette.slice(0, yeardiff).reverse();

  let barchart;
  
  $: if (typeof barchart === "object") {
    modifyData(barchart, data_year);
    modifyColor(barchart, new_palette)
  }

  function modifyData(chart, data) {
    let current = chart.data.labels.slice(-1)[0];
    if (year > current) {
      addData(chart, data[0].year, data[0].total);
    } else if (year < current) {
      removeData(barchart);
    } 
  }

  function removeData(chart) {
    chart.data.labels.splice(-1, 1);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.splice(-1, 1);
    });
    chart.update();
  }

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

//   var bars = chart.labels[0]; //I need this line
//   for(i=0;i<bars.length;i++){
//     var color="green";

//     if(bars[i].label == "bad"){
//         color="red";
//     }
//     else if(bars[i].label == "average"){
//         color="orange"
//     }
//     else{
//         color="green"
//     }
//     bars[i].fillColor = color;
// }
  function modifyColor(chart, palette){
    chart.data.datasets[0].backgroundColor = new_palette;
    chart.update();
  }

  onMount(async () => {
    let config = {
      type: "bar",
      data: {
        labels: initial_labels,
        datasets: [
          {
            label: "Logged (Ha)",
            backgroundColor: new_palette,
            borderColor: "#1F2937",
            data: initial_totals,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            },
          ],
          yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Logged (Ha)'
      },
      gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
    }]
        },
        legend: {
            display: false,
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    barchart = new Chart(ctx, config);
  });
</script>

<canvas id="bar-chart" />
