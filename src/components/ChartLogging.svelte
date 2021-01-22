<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import data from "../year_totals.js";

  export let year;

  let selected;
  $: selected = data.filter(function (x) {
    return x.year == year;
  });

  let barchart;
  $: if(typeof barchart === "object"){
    addData(barchart, selected[0].year, selected[0].total)
  }
  
  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

  onMount(async () => {
    let config = {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Logged (Ha)",
            backgroundColor: "#F87171",
            borderColor: "#1F2937",
            data: [],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              categoryPercentage: 1.0,
              barPercentage: 1.0,
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    barchart = new Chart(ctx, config);
  });
</script>

<canvas id="bar-chart" />
