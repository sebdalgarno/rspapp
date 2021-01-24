<script>
  export let palette;

  let legend_palette = [
    { value: "0", color: palette[0] },
    { value: "10", color: palette[10] },
    { value: "20", color: palette[20] },
    { value: "30", color: palette[30] },
    { value: ">40", color: palette[40] }

    // { value: 116, color: palette[116] }
  ];

</script>

<style>
  .legend {
    @apply text-gray-200 p-2 z-50 text-xs bg-white bg-opacity-10 rounded;
  }

  .legendspan {
    @apply inline-block h-2 mr-1 w-3 text-xs;
  }
</style>

<div class="legend">
  <div class="text- mb-2">
    Years Since
    <br />
    Harvested
  </div>
  {#each legend_palette as { value, color }}
    <div>
      <span class="legendspan" style="background-color: {color}" />
      {value}
    </div>
  {/each}
</div>
