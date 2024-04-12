<script>
	import creditsList, { portraitImages } from '$lib/components/credits/credits.js';
	import { Card, Listgroup, Avatar, Carousel } from 'flowbite-svelte';
</script>

<div class="flex justify-center items-center w-full h-full mt-8">
	<div class="flex flex-col justify-start items-center max-w-[60rem] rounded-lg p-8 my-8 shadow-sm">
		<Card padding="xl" size="none" color="primary" class="w-full">
			<div class="flex justify-between items-center mb-4">
				<h5 class="text-4xl font-bold leading-none text-primary-900 dark:text-white m-auto underline mb-8">
					Credits
				</h5>
			</div>
			<Carousel images={portraitImages} duration="2000" />

			<Listgroup items={creditsList} let:item class="border-0 dark:!bg-transparent">
				<div class="flex items-center space-x-12 rtl:space-x-reverse">
					{#if item.title === 'All Character Portraits'}
						<div class="flex flex-col items-center justify-center m-auto">
							<h2 class="text-xl font-bold text-primary-900 truncate dark:text-white my-2">
								{item.title}
              </h2>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">
								<a href={item.url}>Click here to view source</a>
							</p>
							<div
								class="text-base font-semibold text-primary-900 dark:text-white"
							>
								{item.artist}
							</div>
						</div>
					{:else}
						<Avatar size="lg" src={item.src} alt={item.alt} class="object-cover my-2" />
						<div class="flex-1 min-w-0">
							<p class="text-sm font-medium text-primary-900 truncate dark:text-white">
								{item.title}
							</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">
								<a href={item.url}>Click here to view source</a>
							</p>
						</div>
						<div
							class="inline-flex items-center text-base font-semibold text-primary-900 dark:text-white"
						>
							{item.artist}
						</div>
					{/if}
				</div>
			</Listgroup>
		</Card>
	</div>
</div>
