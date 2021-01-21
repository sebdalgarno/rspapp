<script>
      import {year_min, year_max} from "../consts"

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
    let year = 1940;
    console.log(year)
  </script>

<div class="custom-number-input h-10 w-56 m-10">
    <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">
    </label>
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button on:click={minusYear} class="  text-gray-600 hover:text-gray-700 hover:bg-gray-100 h-full w-20 rounded-l cursor-pointer outline-none">
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input type="number" class=" focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none text-5xl" name="custom-input-number" bind:value={year}/>
    <button on:click={addYear} class=" text-gray-600 hover:text-gray-700 hover:bg-gray-100 h-full w-20 rounded-r cursor-pointer">
      <span class="m-auto text-2xl font-thin">+</span>
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
  </style>
  
