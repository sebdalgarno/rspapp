<script>
	import ExampleComponent from "../components/ExampleComponent.svelte";
	import Navbar from "../components/Navbar.svelte";

</script>

<style>
	.centerer {
		@apply flex-1 flex flex-col items-center justify-center;
	}
</style>

<Navbar></Navbar>

<div class:centerer={true}> <!-- Here's how you could extract conditional class groups with @apply -->
	<ExampleComponent
		title="🌐 Sapper with PostCSS project base"
		paragraph="This is an example route and component to make sure everything's working." />
</div>
