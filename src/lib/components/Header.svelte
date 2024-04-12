<script>
	const logo = '/images/avatar-logo.png';
	import { preloadImages } from '$lib/utils/preloadImages.js';
	import imageUrls from '$lib/components/background/backgroundImgs.js';
	import { goto } from '$app/navigation';
	import { DarkMode, Button } from 'flowbite-svelte';

	const handleLogoButton = async () => {
		await preloadImages(['/images/avatar-hero-v2.jpg']);
		await goto('/');
	};

	const handleHomeButton = async () => {
		await preloadImages(['/images/avatar-hero-v2.jpg']);
		await goto('/');
	};

	const handleTVInfoButton = async () => {
		await preloadImages(imageUrls);
		await goto('/TV-info');
	};

	const handleCreditsButton = async () => {
		await preloadImages(imageUrls);
		await goto('/credits');
	};
</script>

<header class="py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px]">
	<div class="flex flex-wrap items-center justify-between gap-5 relative">
		<button on:click={handleLogoButton} color="primary">
			<img src={logo} alt="logo" class="w-36" />
		</button>
		<div class="flex lg:order-1 max-sm:ml-auto">
			<Button
				on:click={handleHomeButton}
				>Home</Button
			>
			<Button
				on:click={handleTVInfoButton}
				>TV Info</Button
			>
			<Button
				on:click={handleCreditsButton}
				>Credits</Button
			>
			<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		background-color: rgba(255, 255, 255, 0);
	}
</style>
