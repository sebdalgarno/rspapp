<script>
	import { stores } from "@sapper/app";
	import Navbar from '../components/Navbar.svelte';
	import Footer from "../components/FooterSmall.svelte"; 

	import { derived } from 'svelte/store';
import Card from "../components/Card.svelte";
	const { preloading } = stores();
  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

	export let segment = "";
	let path = "";

	if (segment) {}

	const { page } = stores();
	$: path = $page.path.slice(1);
</script>

<style>
	.centerer {
		@apply flex-1 flex flex-col items-center justify-center;
	}
</style>

<Navbar {segment} {path}/>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>


<main class="mt-16 px-3 md:px-6 py-4 bg-gray-100">

{#if $preloading && $delayedPreloading}
	<div class="centerer h-72">
		<p>loading... (I'll add a nicer spinner here)</p>
	</div>
{:else}
<slot />
{/if}
	
</main>
<Footer />

