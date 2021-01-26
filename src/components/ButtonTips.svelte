<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

  export let text = "Tips";


  function openModal() {
    dispatch("open-modal");
  }
</script>

<button on:click={openModal} 
  class="text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-800 hover:text-indigo-900 bg-indigo-200 hover:bg-opacity-100 bg-opacity-80 last:mr-0 mr-1">
  {text}
</button>
