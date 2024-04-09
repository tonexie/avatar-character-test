<script>
	import { characters } from '$lib/data/results.js';
  export let data
	
	let character = characters.find((char) => data.title === char.slug)
</script>

<div>
	{#if character}
		<h1>{character.name}</h1>
		{#each character.traits as trait}
			<p>{trait}</p>
		{/each}
	{/if}
</div>
