<script>
	import { Button, Card, Label, Radio } from 'flowbite-svelte';
	import questions from '$lib/data/questions.js';
	import { userAnswers } from '$lib/data/userAnswersStore.js';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { preloadImages } from '$lib/utils/preloadImages.js';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let rating = '';
	let key = 0;
	let currQ = 0;

	const options = [`Strongly<br/>Disagree`, 'Disagree', 'Neutral', 'Agree', `Strongly<br/>Agree`];

	options.forEach((option) => console.log(option));

	// allow for animation on first render
	onMount(() => {
		key++;
	});

	async function handleSubmit() {
		try {
			if (currQ < questions.length) {
				processUserAnswer();
				dispatch('next');
			}
			if (currQ === questions.length) {
				const character = determineUserCharacter();
				await preloadImages([`/portraits/${character.slug}-portrait.webp`]);
				goto(`/result/${character.slug}`);
			}
		} catch (error) {
			console.error('Error in handleSubmit:', error);
		}
	}

	function processUserAnswer() {
		const charRes = questions[currQ].response;

		// algorithm for updating character scores
		for (let i = 0; i < charRes.length; i++) {
			const charScore = Math.abs(charRes[i].response - rating);
			const currChar = charRes[i].character;
			$userAnswers[i][`${currChar}`] += charScore;
		}
		rating = undefined;
		currQ++;
		key++;
	}

	function determineUserCharacter() {
		const lowestScoreList = $userAnswers.reduce(
			(acc, curr) => {
				const value = Object.values(curr)[0];
				if (value < acc.minValue) {
					acc.minValue = value;
					acc.minObjects = [curr];
				} else if (value === acc.minValue) {
					acc.minObjects.push(curr);
				}
				return acc;
			},
			{ minValue: Infinity, minObjects: [] }
		);
		const characterResult =
			lowestScoreList.minObjects[Math.floor(Math.random() * lowestScoreList.minObjects.length)];
		return characterResult;
	}
</script>

{#if currQ < questions.length}
	{#key key}
		<div class="flex justify-center items-center h-screen">
			<div
				class="flex flex-col justify-start items-center w-full"
				in:fade={{ delay: 600, duration: 500 }}
			>
				<Card size="lg" color="primary">
					<h1 class=" text-3xl font-bold pb-6 text-center dark:text-white">
						Question {questions[currQ].id}/{questions.length}
					</h1>
					<div class="flex flex-col w-full items-center py-8 rounded gap-8">
						<p class="text-center px-2 dark:text-gray-200">{questions[currQ].scenario}</p>
						<form on:submit|preventDefault={handleSubmit} class="flex flex-col items-center w-full">
							<div class="flex w-[85%] justify-evenly m-auto py-4">
								{#each [1, 2, 3, 4, 5] as rate}
									<div class="flex flex-col items-center w-[20%] text-center">
										<Radio
											name="group1"
											bind:group={rating}
											value={rate}
											spacing="0"
											class="min-w-[1.2rem] min-h-[1.2rem]"
										/>
										<Label color="primary" class="dark:text-gray-200">
											{@html options[rate - 1]}
										</Label>
									</div>
								{/each}
							</div>
							<Button type="submit" disabled={!rating}>Next Question</Button>
						</form>
					</div>
				</Card>
			</div>
		</div>
	{/key}
{/if}
