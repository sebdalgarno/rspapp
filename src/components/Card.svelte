<script>
  export let map = false;
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded {map ===
  true
    ? 'p-1'
    : 'px-4 py-3'}"
>
  <slot />
</div>
