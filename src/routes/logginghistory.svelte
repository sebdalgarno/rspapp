<script>
  // components for this layout
  import Footer from "../components/FooterSmall.svelte";
  import CardLogging from "../components/CardLogging.svelte";
  import MapLogging from "../components/MapLogging.svelte";
</script>

<section class="mt-16 p-4">
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-5 md:col-span-2 ">
      <CardLogging region={"British Columbia"} badge={"Info"} />
    </div>
    <div class="col-span-5 md:col-span-3 ">
      <MapLogging region={"British Columbia"} badge={"Map"} />
    </div>
  </div>
</section>

<Footer />
