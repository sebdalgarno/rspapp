<script>
	 import Card from "../components/Card.svelte";
	 import Badge from "../components/Badge.svelte";



</script>

<style>
	.centerer {
		@apply flex-1 flex flex-col items-center justify-center;
	}
</style>
   
<div class="lg:px-10">
	<Card>
		<div class="block relative w-full p-4">
			<div class="items-center w-full bg-transparent border-collapse ">
			  <div class="">
				  <h1 class="text-4xl">Welcome!</h1>
				  <br>
				  <div class="flex">
					<h3>Look for the</h3>
					<Badge />
					<h3>buttons to get tips on how best to explore the data.</h3>
				  </div>
			  </div>
			</div>
		  </div>
	</Card>

</div>
	


 
