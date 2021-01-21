<script>
  // components for this layout
  import Footer from "../components/FooterSmall.svelte";
  import CardLogging from "../components/CardLogging.svelte";
  import MapLogging from "../components/MapLogging.svelte";
</script>

<section class="mt-16 p-4">
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3 md:col-span-1 ">
      <CardLogging region={"British Columbia"} aside={"Info"} />
    </div>
    <div class="col-span-3 md:col-span-2 ">
      <MapLogging region={"British Columbia"} aside={"Map"} />
    </div>
  </div>
</section>

<Footer />
