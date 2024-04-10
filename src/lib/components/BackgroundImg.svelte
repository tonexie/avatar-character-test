<script>
	export let image;
	export let refresher = 0;
	let previousImage;

	const images = [
		{ path: '/backgrounds/avatar-landscape1.jpg' },
		{ path: '/backgrounds/avatar-landscape2.png' },
		{ path: '/backgrounds/avatar-landscape3.png' },
		{ path: '/backgrounds/avatar-landscape4.png' },
		{ path: '/backgrounds/avatar-landscape5.webp' },
		{ path: '/backgrounds/avatar-landscape6.avif' },
		{ path: '/backgrounds/avatar-landscape7.jpg' },
		{ path: '/backgrounds/avatar-landscape8.png' },
		{ path: '/backgrounds/avatar-landscape9.jpg' },
	];

	function getRandomImage() {
		let randomImage;
		do {
			const randomIndex = Math.floor(Math.random() * images.length);
			randomImage = images[randomIndex].path;
		} while (randomImage === previousImage);
		previousImage = randomImage;
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
		overflow: hidden;
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
