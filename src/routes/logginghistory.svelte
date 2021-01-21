<script>
  
    // components for this layout
    import Footer from "../components/Footer.svelte";
  import MapExample from "../components/MapExample.svelte";

  </script>
  
  <section class="mt-10 md:mt-40 pb-40 relative bg-gray-200">
   
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
  </section>
  <Footer />
  