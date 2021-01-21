<script>
    import Badge from "./Badge.svelte"
    import ChartLogging from "./ChartLogging.svelte"
    import Button from "./Button.svelte"
    import {year_min, year_max} from "../consts"

	export let region;
    export let badge;
    export let year;

    function addYear() {
    if (year != year_max) {
      year++;
    }
  }

  function minusYear() {
    if (year != year_min) {
      year--;
    }
  }
</script>

<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-gray-800">
          {region}
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <Badge text={badge}></Badge>
      </div>
    </div>
  </div>
  <div class="block relative w-full p-4">
    <div class="items-center w-full bg-transparent border-collapse ">
        
        <ChartLogging {year}/>
    </div>
</div>
</div>

