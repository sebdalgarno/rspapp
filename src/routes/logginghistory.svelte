<script>
  // components for this layout
  import MapLogging from "../components/MapLogging.svelte";
  import Tips from "../components/Tips.svelte";
  import Card from "../components/Card.svelte";
  import CardHeader from "../components/CardHeader.svelte";
  import chroma from "chroma-js";

  import ChartLogging from "../components/ChartLogging.svelte";
  import {
    base_colors,
    coordinates,
    year_min,
    year_max,
    bounds
  } from "../consts";

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

  // import NumberInput, {year} from "../components/NumberInput.svelte";
  import NumberInput from "../components/NumberInput.svelte";


  let year = 1940;
  let region = "British Columbia";
  let badge = "Map";
  // $: console.log(year)

  // function addYear() 
  //   if (year != year_max) {
  //     year++;
  //   }
  // }

  // function minusYear() {
  //   if (year != year_min) {
  //     year--;
  //   }
  // }
</script>

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-5 md:col-span-2 ">
        <Card>
          <CardHeader>
            <h3 class="font-semibold text-base text-gray-800">
              {region}
            </h3>
            <Tips text={"Tips"} />
          </CardHeader>
          
          <!-- <div class="">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-gray-800">
                {region}
              </h3>
            </div>
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Tips text={"Tips"} />
            </div>
          </div> -->
              <NumberInput bind:year={year} />

            <div class="block relative w-full">
              <div class="items-center w-full bg-transparent border-collapse ">
                <ChartLogging {year} />
              </div>
            </div>

        </Card>
  </div>
  <div class="col-span-5 md:col-span-3 ">
    <Card>
      <div>
        <h3 class="font-semibold text-base text-gray-800">
          {region}
        </h3>
        <div class=" flex-grow flex-1 text-right">
          <Tips />
        </div>
        <div class="block w-full pt-2">
          <div class="items-center w-full bg-transparent border-collapse ">
            <MapLogging {year} {map_palette} {bounds}  />
          </div>
        </div>
      </div>
    </Card>
  </div>
</div>

