<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  export let year;
  export let year_min;
  export let data_year;
  export let data_total;

  let initial_totals;
  let initial_labels;

  initial_totals = data_total.map(function (el) {
    return el.total;
  });

  initial_labels = data_total.map(function (el) {
    return el.year;
  });

  $: console.log(data_total)

  let barchart;
  $: if (typeof barchart === "object") {
    modifyData(barchart, data_year);
  }

  function modifyData(chart, data) {
    let current = chart.data.labels.slice(-1)[0];
    if (year > current) {
      addData(chart, data[0].year, data[0].total);
    } else if (year < current) {
      removeData(barchart);
    } else {
      addData(chart, data[0].year, data[0].total);
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

  onMount(async () => {
    let config = {
      type: "bar",
      data: {
        labels: initial_labels,
        datasets: [
          {
            label: "Logged (Ha)",
            backgroundColor: "#F87171",
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
