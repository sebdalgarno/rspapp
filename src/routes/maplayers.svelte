<script context="module">
  // export async function preload(page, session) {
  //   const res = await this.fetch(`year_totals.json`);
  //   const year_totals = await res.json();

  //   return { year_totals };
  // }
</script>

<script>
  // components for this layout
  import MapLogging from "../components/MapLogging.svelte";
  import ButtonTips from "../components/ButtonTips.svelte";
  import Card from "../components/Card.svelte";
  import InfoLogging from "../components/InfoLogging.svelte";
  import ChartLogging from "../components/ChartLogging.svelte";
  import NumberInput from "../components/NumberInput.svelte";
  import Legend from "../components/Legend.svelte";
  import Select from "svelte-select";
  import regions from "../regions.json";
  import yearTotals from "../year_totals.json";

  import chroma from "chroma-js";
  import { base_colors, year_min, year_max } from "../consts";

  let ecoregion;
  let selected_ecoregion = "British Columbia";
  $: if(ecoregion) {
    selected_ecoregion = ecoregion.value
  }
  let selected_layer = "Harvest History"
  let year = 2019;
  let yeardiff = year_max - year_min + 1;
  let palette = chroma
    .bezier(base_colors)
    .scale()
    .correctLightness()
    .colors(40);

  let year_total_region;
  $: year_total_region = yearTotals.filter(function (x) {
    return x.name == selected_ecoregion;
  });

  const groupBy = (item) => item.group;
  let layers = ["Harvest History", "VRI Site Index", "Roads"];

  for (let i = 40; i < yeardiff; i++) {
    palette.push(palette[39]);
  }

  let map_palette = [];
  for (let i = 0; i < palette.length; i++) {
    map_palette.push(i);
    map_palette.push(palette[i]);
  }

  let data_year;
  $: data_year = year_total_region.filter(function (x) {

    return x.year == year;
  });

  let data_total;
  $: data_total = year_total_region.filter(function (x) {
    return x.year <= year;
  });

  function incrementYear() {
    const playing = setInterval(() => {
      if (year != year_max && caption == "Pause") {
        year++;
      } else {
        caption = "Play animation";
        clearInterval(playing);
      }
    }, 750);
  }

  function updateEcoregion(event) {
    ecoregion = {value: event.detail.value, label: event.detail.value}
  }

  let caption = "Play animation";
  function togglePlay() {
    if (caption == "Play animation") {
      caption = "Pause";
      if (year == 2019) {
        year = year_min + 1;
      }
    } else {
      caption = "Play animation";
    }
    incrementYear();
  }
</script>

<Card>
  
  <div class="grid grid-cols-5 gap-12">
    <div class="col-span-5 lg:col-span-2">
      <div class="grid-cols-1">
        <div class="col-span-1">
          <h1 class="text-2xl">{selected_ecoregion}</h1>
        </div>
        <div class="col-span-1">
          <p class="text-xl text-gray-700">{selected_layer}</p>
        </div>
        <div class="col-span-1">
          <button
          class="bg-indigo-100 hover:bg-opacity-100 bg-opacity-80 text-indigo-900 hover:text-indigo-900 px-3 py-2 rounded-full text-xs mt-2"
          on:click={togglePlay}>
          {caption}
        </button>
        </div>
      </div>
     
      <div class="flex flex-row justify-center ">
        <NumberInput bind:year on:play-pause={togglePlay} {caption} />
        <!-- <PlayButton /> -->
      </div>
      <div class="block relative w-full">
        <div class="items-center w-full bg-transparent border-collapse">
          <ChartLogging
            {year}
            {year_min}
            {data_total}
            {map_palette}
            {palette}
          />
        </div>
        <div class="pt-4 text-center">
          <InfoLogging {year} {year_min} {data_year} {data_total} />
        </div>
      </div>
      <!-- </Card> -->
    </div>
    <div class="col-span-5 lg:col-span-3 ">
      <!-- <Card map={true}></Card> -->
      <div class="block w-full">
        <div class="items-center w-full bg-transparent border-collapse">
          <div class="grid grid-cols-2 gap-2">
            <div class="mb-2 col-span-2 lg:col-span-1">
              <Select
                items={regions}
                {groupBy}
                placeholder="Select ecoregion..."
                bind:selectedValue={ecoregion}
              />
            </div>
            <div class="mb-2 col-span-2 lg:col-span-1">
              <Select
                items={layers}
                {groupBy}
                placeholder="Select map layer..."
              />
            </div>         
          </div>
          <div class="absolute p-2">
            <Legend {palette} />
          </div>
          <MapLogging {year} {map_palette} {ecoregion} on:update-ecoregion={updateEcoregion} />
        </div>
      </div>
    </div>
  </div>
</Card>
