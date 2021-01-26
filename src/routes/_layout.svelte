<!-- <script context="module">

export async function preload(page, session) {
		const res = await this.fetch(`year_totals.json`);
		const year_totals = await res.json();

		return { year_totals };
	}
</script> -->

<script>
	import { stores } from "@sapper/app";
	import Navbar from '../components/Navbar.svelte';
	import Footer from "../components/FooterSmall.svelte"; 

	export let segment = "";
	let path = "";

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

<main class="mt-16 px-3 md:px-6 py-4 bg-gray-100">
	<slot />
</main>
<Footer />

