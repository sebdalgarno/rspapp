<script>
    import Badge from "./Badge.svelte"
    import Mapbox from "./Mapbox.svelte"
	export let region;
	export let aside;
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
          <Badge text={aside}></Badge>
      </div>
    </div>
   
  </div>
  <div class="block relative w-full p-4">
    <div class="items-center w-full bg-transparent border-collapse ">
        <Mapbox></Mapbox>

    </div>
</div>
</div>
