<script>
    import { createEventDispatcher } from "svelte";

export let caption;

const dispatch = createEventDispatcher();

function playPause() {
    dispatch("play-pause");
  }
    
 
</script>

<button class=" bg-indigo-200 hover:bg-opacity-100 bg-opacity-80 text-indigo-900 hover:text-indigo-900 block px-3 rounded-full text-xs"
on:click={playPause}>
    {caption} 
</button>

