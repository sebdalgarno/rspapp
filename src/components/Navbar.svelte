<script>
  // import { link } from "svelte-routing/src";
  import Icon from "fa-svelte";
  import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";

  let icon = faMap;

  // core components
  let navbarOpen = false;

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
  export let path;
  export let segment;
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
        aria-current={segment === undefined ? "page" : undefined}
        href="."
        class="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
        BC Forest Tool
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={setNavbarOpen}>
        <i class="fas fa-bars" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center {navbarOpen ? 'block' : 'hidden'}"
      id="example-navbar-warning"
    >
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

        <li class="flex items-center">
          <a
            rel="prefetch"
            aria-current={segment === "derivedlayers" ? "page" : undefined}
            href="derivedlayers"
            class="{path.indexOf('derivedlayers') !== -1
              ? 'text-red-500'
              : 'text-gray-800'} hover:bg-gray-100 px-3 py-2 flex items-center text-xs uppercase font-bold">
            <Icon
              class="mr-2 text-sm {path.indexOf('derivedlayers') !== -1
                ? 'opacity-75'
                : 'text-gray-400'}"
              {icon}
            />
            Derived Layers
          </a>
        </li>
        <li class="flex items-center">
          <a
            rel="prefetch"
            aria-current={segment === "maplayers" ? "page" : undefined}
            href="maplayers"
            class="{path.indexOf('maplayers') !== -1
              ? 'text-red-500 '
              : 'text-gray-800'} hover:bg-gray-100  px-3 py-2 flex items-center text-xs uppercase font-bold">
            <Icon
              class="mr-2 text-sm {path.indexOf('maplayers') !== -1
                ? 'opacity-75'
                : 'text-gray-400'}"
              {icon}
            />
            Map Layers
          </a>
        </li>
        <li class="flex items-center">
          <a
            aria-current={segment === undefined ? "page" : undefined}
            href="."
            class="hover:bg-gray-100   text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold">
            Home
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
