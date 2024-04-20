<script>
	import { backgroundImageStore } from '$lib/data/backgroundStore.js';
	import imageUrls from '$lib/components/background/backgroundImgs.js';

	export let image;
	export let refresher = 0;

	function getRandomImage() {
		let randomImage;
		do {
			const randomIndex = Math.floor(Math.random() * imageUrls.length);
			randomImage = imageUrls[randomIndex];
		} while (randomImage === $backgroundImageStore);
		backgroundImageStore.set(randomImage);
		return randomImage;
	}

	if (image === undefined) {
		image = getRandomImage();
	}

	$: if (refresher) {
		image = getRandomImage();
	}
</script>

<div class="container">
	<img src={image} alt="Avatar: The Last Airbender background" class="image" />
</div>

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100%;
		min-height: 100%;
		z-index: -1;
		/* overflow: hidden; */
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		min-width: 100vw;
		min-height: 100vh;
	}
</style>
