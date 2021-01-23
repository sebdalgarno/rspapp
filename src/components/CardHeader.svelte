<script>
    import Tips from "./Tips.svelte"

    export let region;
    export let text;
</script>

<div class="absolute left-3 p-2">
    <!-- <div>
        <h3 class="col-span-1 font-semibold text-base text-gray-800">
            {region}
          </h3>
    </div> -->
  
      <div class="">
      <Tips {text} />
    </div>
</div>
