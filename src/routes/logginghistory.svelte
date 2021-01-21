<script>
  
    // components for this layout
    import Footer from "../components/FooterSmall.svelte";
  import CardLogging from "../components/CardLogging.svelte";
  import MapLogging from "../components/MapLogging.svelte";



  </script>

<section class="mt-16 p-4">
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3 md:col-span-1 ">
      <CardLogging region={"British Columbia"} aside={"Info"}></CardLogging>
    </div>
    <div class="col-span-3 md:col-span-2 ">
      <MapLogging region={"British Columbia"} aside={"Map"}></MapLogging>
    </div>
  </div>
</section>
  
  
  <!-- <section class="mt-10 md:mt-40 pb-40 relative bg-gray-200">
   
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div
          class="w-10/12 md:w-4/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
        >
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "
          >
            <p>logging</p>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <MapExample/>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <Footer />
  