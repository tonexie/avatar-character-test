<script>
	export let title = 'Test Your Avatar Knowledge';
	export let subtitle = 'Answer trivia questions and become an Airbending master!';
	export let image = './images/avatar-hero-v2.jpg';
</script>

<section class="hero min-h-screen flex items-center justify-center">
	<div class="hero-content max-w-md text-center z-1">
		<!-- <h1 class="text-3xl font-bold mb-4">{title}</h1>
		<p class="text-xl mb-8">{subtitle}</p> -->
		<a href="/test">
			Click here to take the Personality Test!
			<button class="bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none">
				Start Personality Test
			</button>
		</a>
		
	</div>
	<img
		src={image}
		alt="Avatar: The Last Airbender background"
		class="hero-image z-[-1] absolute top-0 left-0 w-screen"
	/>
</section>

<style>
</style>
