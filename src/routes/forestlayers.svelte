<script>
  
    import FooterSmall from "../components/FooterSmall.svelte";
  //   import CardLineChart from "../components/CardLineChart.svelte";
  // import CardBarChart from "../components/CardBarChart.svelte";
  import CardPageVisits from "../components/CardPageVisits.svelte";
  import CardSocialTraffic from "../components/CardSocialTraffic.svelte";
// import Footer from "../components/Footer.svelte";
  // console.log(location)

  </script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<!-- <section class="header relative pt-16 items-center flex h-screen max-h-860-px">
  <div class="container mx-auto items-center flex flex-wrap">
    <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
      <div class="pt-32 sm:pt-0">
        <h2 class="font-semibold text-4xl text-gray-700">
          Notus Svelte - A beautiful extension for Tailwind CSS.
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-gray-600">
          Notus Svelte is Free and Open Source. It does not change or
          add any CSS to the already one from
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-gray-700"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . It features multiple HTML elements and it comes with dynamic
          components for ReactJS, Vue and Angular.
        </p>
        <div class="mt-12">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-red-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            target="_blank"
          >
            Github Star
          </a>
        </div>
      </div>
    </div>
  </div>
</section> -->

<svelte:head>
	<title>Forest Layers</title>
</svelte:head>

<div class="absolute md:ml-64 bg-gray-400  t-40">

  <div class="px-4 md:px-10 mx-auto w-full  ">
    <div>
      <div class="flex flex-wrap">
        <!-- <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> -->
      </div>
      <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </div>
  </div>
  
</div>

<FooterSmall/>

