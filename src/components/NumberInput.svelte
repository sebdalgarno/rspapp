<script>
      import {year_min, year_max} from "../consts"
    //   import { writable } from 'svelte/store'

     function addYear() {
    if (year != year_max) {
      year++;
    }
  }

  function minusYear() {
    if (year != year_min) {
      year--;
    }
  }
    // export let year = writable('default year');
    export let year = year_min;
  </script>

<div class="custom-number-input h-10 w-56 m-10">
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
      <button on:click={minusYear} class=" pluscont">
        <span class="plus">−</span>
      </button>
      <input bind:value={year} type="number"  class="-m-6 disabled:bg-opacity-0 focus:outline-none text-center w-full font-semibold text-md  md:text-basecursor-default flex items-center text-gray-800  outline-none text-5xl" name="custom-input-number" />
    <button on:click={addYear} class=" pluscont">
      <span class="plus">+</span>
    </button>
  </div>
  </div>
  
  <style>
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    .custom-number-input input:focus {
      outline: none !important;
    }
  
    .custom-number-input button:focus {
      outline: none !important;
    }

    .plus {
      @apply m-auto text-2xl z-10 font-light;
    }

    .pluscont {
      @apply text-gray-600 hover:text-gray-800 hover:bg-gray-100 h-full w-16 rounded-r cursor-pointer font-bold text-lg z-10;
    }

  </style>
  
