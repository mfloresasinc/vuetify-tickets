<template>
	<div class="pink darken-4 text-center">
		<div class="white--text" style="padding-top: 52%; padding-bottom: 51%;">
			<img style="max-width: 80%;" src="../public/1200px-Logo_UCSG.svg.png">
			<h1>UCSG-Tickets</h1>
			<Spinner />
		</div>
	</div>
</template>

<script>
	import Spinner from "./components/spinner.vue"
  export default {
  	components: { Spinner },
    created(){
      setTimeout( () => this.$router.push({ path: '/shows'}), 3000);

    }
  }
</script>