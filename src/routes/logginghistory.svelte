<script>
  // components for this layout
  import MapLogging from "../components/MapLogging.svelte";
  import Tips from "../components/Tips.svelte";
  import Card from "../components/Card.svelte";
  import CardHeader from "../components/CardHeader.svelte";
  import InfoLogging from "../components/InfoLogging.svelte";
  import ChartLogging from "../components/ChartLogging.svelte";
  import NumberInput from "../components/NumberInput.svelte";

  import chroma from "chroma-js";
  import data from "../year_totals.js";
  import {
    base_colors,
    coordinates,
    year_min,
    year_max,
    bounds,
  } from "../consts";

  let year = 1940;
  let region = "British Columbia";
  let yeardiff = year_max - year_min;
  let palette = chroma
    .bezier(base_colors)
    .scale()
    .correctLightness()
    .colors(80);
  
  for (let i = 80; i < yeardiff; i++) {
    palette.push(palette[79]);
  }

  let map_palette = [];
  for (let i = 0; i < palette.length; i++) {
    map_palette.push(i);
    map_palette.push(palette[i]);
  }

  let data_year;
  $: data_year = data.filter(function (x) {
    return x.year == year;
  });

  let data_total;
  $: data_total = data.filter(function (x) {
    return x.year <= year;
  });
</script>

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-5 md:col-span-2 ">
    <Card>
      <CardHeader {region} />
      <div class="items-center mx-auto">
        <NumberInput bind:year />
      </div>
      <div class="block relative w-full">
        <div class="items-center w-full bg-transparent border-collapse ">
          <ChartLogging {year} {data_year} {data_total} />
        </div >
        <div class="py-3">
          <InfoLogging {year} {year_min} {data_year} {data_total} />
        </div>
      </div>
    </Card>
  </div>
  <div class="col-span-5 md:col-span-3 ">
    <Card>
      <CardHeader {region} />
      <div class="block w-full pt-2">
        <div class="items-center w-full bg-transparent border-collapse ">
          <MapLogging {year} {map_palette} {bounds} />
        </div>
      </div>
    </Card>
  </div>
</div>
