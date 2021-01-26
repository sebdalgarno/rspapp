<script>
    export let tips1;
    export let tips2;
  </script>
  
  <style>
    .title {
      @apply text-xl pt-4 pb-1;
    }
  
    .text {
      @apply text-sm text-gray-900;
    }
  
  </style>
  
  <div class="z-50">
    <p class="title">Tips for exploring the data</p>
    <p class="text">{tips1}</p>
    <br>
    <p class="text">{tips2}</p>
  </div>
  