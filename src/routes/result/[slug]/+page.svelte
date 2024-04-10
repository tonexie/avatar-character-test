<script>
	import BackgroundImg from '$lib/components/BackgroundImg.svelte';
	import { characters } from '$lib/data/results.js';
	export let data;

	let character = characters.find((char) => data.title === char.slug);
</script>

<BackgroundImg />

<div class="flex justify-center items-center h-screen">
	{#if character}
		<div class="flex flex-col items-center justify-center max-w-md rounded-lg shadow-lg bg-white h-[90%]">
			<div>
				<img class="w-full rounded object-cover" src={character.imgUrl} alt={character.name} />
			</div>
			<div class="px-6 py-4">
				<h1 class="font-bold text-xl mb-2">{character.name}</h1>
				{#each character.traits as trait}
					<p class="text-gray-700 text-base">{trait}</p>
				{/each}
			</div>
		</div>
	{/if}
</div>
