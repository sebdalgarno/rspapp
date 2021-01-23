<script context="module">
	  import Footer from "../components/FooterSmall.svelte";

	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";
	import Navbar from '../components/Navbar.svelte';


	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment = "";
	let path = "";
	// Silence unused export property warning
	// eslint-disable-next-line no-empty
	if (segment) {}

	const { page } = stores();
	$: path = $page.path.slice(1);
</script>

<Navbar {segment} {path}/>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<main class="mt-16 px-3 md:px-6 py-4 bg-gray-50">
	<slot />
</main>
<Footer />

