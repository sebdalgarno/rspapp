<script>
  // components for this layout
  import Footer from "../components/FooterSmall.svelte";
  import CardLogging from "../components/CardLogging.svelte";
  import MapLogging from "../components/MapLogging.svelte";
  import Button from "../components/Button.svelte";
  import NumberInput from "../components/NumberInput.svelte";
  import {year_min, year_max} from "../consts"


  let year = 1940;
  let region = "British Columbia"
  let badge = "Map"

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

<section class="mt-16 p-4">
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-5 md:col-span-2 ">
      <div class="text-center flex justify-center">
        <!-- <Button outline={false} caption={'-'} on:minus-year={minusYear} />
        <div class="inline-block">
          <p class="text-5xl text-gray-500" {year}>{year}</p>
        </div>
        <Button outline={false} caption={'+'} on:add-year={addYear} /> -->
        <!-- <span>Show logging history from</span>
        <NumberInput {year} />
        <span>to</span> -->
        <NumberInput {year} />
      </div>
      <CardLogging region={"British Columbia"} badge={"Info"} {year} />
    </div>
    <div class="col-span-5 md:col-span-3 ">
      <MapLogging region={"British Columbia"} badge={"Map"} />
    </div>
  </div>
</section>

<Footer />
