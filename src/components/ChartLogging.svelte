<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import data from "../year_totals.js";

  export let year;
  console.log(year)

  let selected;
  $: selected = data.filter(function (x) {
    return x.year <= year;
  });

  let years = [];
  $: for (var key in selected) {
    years.push(selected[key].year);
  }

  let totals = [];
  $: for (var key in selected) {
    totals.push(selected[key].total);
  }

  onMount(async () => {
    let config = {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Logged (Ha)",
            backgroundColor: "#F87171",
            borderColor: "#1F2937",
            data: totals,
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
    window.myBar = new Chart(ctx, config);
  });
</script>

<canvas id="bar-chart" />
