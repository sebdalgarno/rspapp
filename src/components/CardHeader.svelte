<script>
    import Tips from "./Tips.svelte"

    export let region;
    export let text;
</script>

<div class="grid grid-cols-2 absolute right-0 p-2">
    <div>
        <h3 class="col-span-1 font-semibold text-base text-gray-800">
            {region}
          </h3>
    </div>
  
      <div class="text-right ">
      <Tips {text} />
    </div>
</div>
