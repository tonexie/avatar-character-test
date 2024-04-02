<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="home-container">
  <Header />
  <Hero />
</div>

<style>
  * {
    border: black 1px solid;
  }

  .home-container {
    display: flex;
    flex-direction: column;
  }
</style>
