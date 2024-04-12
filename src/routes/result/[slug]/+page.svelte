<script>
	import { Card } from 'flowbite-svelte';
	import BackgroundImg from '$lib/components/background/BackgroundImg.svelte';
	import { backgroundImageStore } from '$lib/data/backgroundStore.js';
	import { characters } from '$lib/data/results.js';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;
	let key = 0;

	// allow for animation on first render
	onMount(() => {
		key++;
	});

	let character = characters.find((char) => data.title === char.slug);
</script>

<BackgroundImg image={$backgroundImageStore} />

<div class="flex justify-center items-center h-full">

	{#if character}
		{#key key}
			<div in:fade={{ delay: 600, duration: 500 }} class="max-w-[32rem] m-16">

				<Card img={character.imgUrl} color="primary">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{character.name}
					</h5>
					{#each character.traits as trait}
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{trait}</p>
					{/each}
				</Card>
			</div>
		{/key}
	{/if}
</div>
