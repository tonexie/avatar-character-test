<script>
	import { themes, changePrimaryColorTheme } from '$lib/components/themeManager.js';
	import { preloadImages } from '$lib/utils/preloadImages.js';
	import imageUrls from '$lib/components/background/backgroundImgs.js';
	import { goto } from '$app/navigation';
	import { DarkMode, Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
	import { page } from '$app/stores';

	let colours = 'colours';
	const logo = '/images/avatar-logo.png';
	$: isHomePage = $page.url.pathname === '/';

	const setTheme = (themeName) => {
		if (themes[themeName]) {
			changePrimaryColorTheme(themes[themeName].colors);
		} else {
			console.warn('Theme not found:', themeName);
		}
	};
	$: setTheme(colours);

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
		<div class="flex gap-2 lg:order-1 max-sm:ml-auto">
			<Button on:click={handleHomeButton}>Home</Button>
			<Button on:click={handleTVInfoButton}>TV Info</Button>
			<Button on:click={handleCreditsButton}>Credits</Button>
			{#if !isHomePage}
				<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
			{:else}
				<Button>Themes</Button>
				<Dropdown class="w-44 p-3 space-y-3 text-sm">
					{#each Object.entries(themes) as [themeKey, themeValue]}
						<li>
							<Radio name="group1" bind:group={colours} value={themeKey}>
								{themeValue.name}
							</Radio>
						</li>
					{/each}
				</Dropdown>
			{/if}
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
