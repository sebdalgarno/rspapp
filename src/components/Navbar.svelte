<script>
  import { link } from "svelte-routing/src";

  // core components
  let navbarOpen = false;
  // console.log(location)

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
  export let pathname = "forestlayers";

</script>

<nav
  class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        use:link
        class="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
        href="/"
      >
        BC Forest Tool
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click="{setNavbarOpen}"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center {navbarOpen ? 'block':'hidden'}"
      id="example-navbar-warning"
    >
      <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a
            class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index-navbar"
          >
            <i class="text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />
            Docs
          </a>
        </li>
      </ul> -->
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <a
          use:link
          href="/forestlayers"
          class="{pathname.indexOf('/forestlayers') !== -1 ? 'text-red-500 hover:text-red-600':'text-gray-800 hover:text-gray-600'} px-3 py-2 flex items-center text-xs uppercase font-bold"        >
          <i
          class="fas fa-map mr-2 text-sm {pathname.indexOf('/forestlayers') !== -1 ? 'opacity-75' : 'text-gray-400'}"
        ></i>
          Forest Layers
        </a>
        </li>
        <li class="flex items-center">
           
          <a
          use:link
          href="/logginghistory"
          class="{pathname.indexOf('/logginghistory') !== -1 ? 'text-red-500 hover:text-red-600':'text-gray-800 hover:text-gray-600'} px-3 py-2 flex items-center text-xs uppercase font-bold"        >
          <i
              class="fas fa-map mr-2 text-sm {pathname.indexOf('/logginghistory') !== -1 ? 'opacity-75' : 'text-gray-400'}"
            ></i>
          Logging History
        </a>
        </li>
        <li class="flex items-center">
          <a
          use:link
          href="/"
          class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"        >
          Home
        </a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
