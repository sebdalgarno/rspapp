<script>
    import Tips from "./Tips.svelte"

    export let region;
    export let text;
</script>

<div class="grid grid-cols-2 pb-1">
    <div>
        <h3 class="col-span-1 font-semibold text-base text-gray-800">
            {region}
          </h3>
    </div>
  
      <div class="text-right col-span-1">
      <Tips {text} />
    </div>
</div>
