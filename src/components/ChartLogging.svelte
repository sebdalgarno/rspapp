<script>
    import { onMount } from "svelte";
    import Chart from "chart.js";
    import data from "../year_totals.js";

    console.log(data)
  
    onMount(async () => {
      let config = {
        type: "bar",
        data: {
          labels: data.years,
          datasets: [
            {
              label: "Logged (Ha)",
              backgroundColor: "#818CF8",
              borderColor: "#1F2937",
              data: data.totals,
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
  
  