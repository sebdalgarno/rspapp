<script context="module">

  export async function preload(page, session) {
      const res = await this.fetch(`year_totals.json`);
      const year_totals = await res.json();
  
      return { year_totals };
    }
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
  import Modal from "svelte-simple-modal";
  import ModalTips from "../components/ModalTips.svelte";

  import chroma from "chroma-js";
  import {
    base_colors,
    year_min,
    year_max,
  } from "../consts";

  export let year_totals;
  let year = 2019;
  let yeardiff = year_max - year_min + 1;
  let palette = chroma
    .bezier(base_colors)
    .scale()
    .correctLightness()
    .colors(40);

  for (let i = 40; i < yeardiff; i++) {
    palette.push(palette[39]);
  }

  let map_palette = [];
  for (let i = 0; i < palette.length; i++) {
    map_palette.push(i);
    map_palette.push(palette[i]);
  }

  let data_year;
  $: data_year = year_totals.filter(function (x) {
    return x.year == year;
  });

  let data_total;
  $: data_total = year_totals.filter(function (x) {
    return x.year <= year;
  });

  function incrementYear() {
    const playing = setInterval(() => {
      if(year != year_max && caption == "Pause"){
        year++;
      } else {
        caption = "Play"
        clearInterval(playing)
      }
    }, 1000)
  }

  let caption = "Play"
  function togglePlay() {
    if(caption == "Play"){
      caption = "Pause"
      if(year == 2019){
        year = year_min + 1;
      }
    } else {
      caption = "Play"
    }
    incrementYear()
  }
</script>

  <Card>
    <div class="absolute left-3 p-2">
      <Modal >
        <ModalTips />
      </Modal>
  </div>
    <div class="grid grid-cols-5 gap-12">
    <div class="col-span-5 lg:col-span-2 ">
      <div class="flex flex-row justify-center ">
        <NumberInput bind:year on:play-pause={togglePlay} {caption} />
        <!-- <PlayButton /> -->
      </div>
      <div class="block relative w-full">
        <div class="items-center w-full bg-transparent border-collapse">
          <ChartLogging {year} {year_min} {data_total} {map_palette} {palette} />
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
        <div class="items-center w-full bg-transparent border-collapse ">
          <div class="absolute p-2">
            <Legend {palette} />
          </div>
          <MapLogging {year} {map_palette} />
        </div>
      </div>
    </div>
</div>
</Card>

