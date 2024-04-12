<script>
	import creditsList from '$lib/components/credits/credits.js';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
    Banner 
	} from 'flowbite-svelte';
</script>

<div class="flex justify-center items-center w-full h-full mt-8">
	<div
		class="flex flex-col justify-start items-center max-w-xl  rounded-lg p-8 my-8 shadow-lg"
	>
  <Banner>
		<h1 class="text-4xl font-bold text-white mb-4 underline">Credits</h1>
    
  </Banner>
		<Table color="blue" hoverable={true}>
			<TableHead>
				<TableHeadCell>Image Title</TableHeadCell>
				<TableHeadCell>Artist</TableHeadCell>
				<TableHeadCell>Image URL</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each creditsList as source}
					<TableBodyRow>
						<TableBodyCell>{source.title}</TableBodyCell>
						<TableBodyCell>{source.author}</TableBodyCell>
						<TableBodyCell><a href={source.url}>Click Here</a></TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>

		<div class="flex flex-col w-full bg-blue-50 p-8 rounded">
			{#each creditsList as source}
				<li class="mb-2">
					<p class="text-sm text-gray-800">
						<span class="font-semibold">{source.title}</span> by
						<span class="italic">{source.author}</span>.
						<a
							href={source.url}
							class="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
							>Click here to view.</a
						>
					</p>
				</li>
			{/each}
		</div>
	</div>
</div>
