<script>
	import questions from '$lib/data/questions.js';
	import { userAnswers } from '$lib/data/userAnswersStore.js';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let rating = '';
	let currQ = 0;

	function handleSubmit() {
		if (currQ < questions.length) {
			processUserAnswer();
			dispatch('next');
		}
		if (currQ == questions.length - 1) {
			const character = determineUserCharacter();
			goto(`/result/${character.slug}`);
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
		console.log($userAnswers);
		rating = undefined;
		currQ++;
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

<div class="flex justify-center items-center h-screen">
	<div
		class="flex flex-col justify-start items-center bg-sky-500 p-4 rounded-lg shadow-lg w-[60%]"
	>
		<h1 class=" text-3xl font-bold pb-6">Question {questions[currQ].id}</h1>
		<div class="flex flex-col w-full items-center bg-blue-200 py-8 rounded gap-8">
			<p class="text-center px-2">{questions[currQ].scenario}</p>
			<form on:submit|preventDefault={handleSubmit} class="flex flex-col items-center w-full">
				<div class="flex w-[70%] justify-between m-auto py-4">
					{#each [1, 2, 3, 4, 5] as rate}
						<div class="radio-wrapper">
							<input type="radio" id={`rate-${rate}`} bind:group={rating} value={rate} />
							<label for={`rate-${rate}`} class="radio-label">
								{rate}
							</label>
						</div>
					{/each}
				</div>
				<button type="submit" disabled={!rating}>Next Question</button>
			</form>
		</div>
	</div>
</div>

<style>
	.radio-wrapper {
		position: relative;
		width: 40px;
		height: 40px;
	}

	.radio-wrapper input[type='radio'] {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}

	.radio-label {
		cursor: pointer;
		width: 100%;
		height: 100%;
		border: 2px solid transparent;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		background-color: lightgrey;
	}

	.radio-wrapper input[type='radio']:checked + .radio-label {
		border-color: blue;
		background-color: rgba(0, 0, 255, 0.2);
	}

	.radio-label:hover {
		background-color: rgba(0, 0, 255, 0.1);
	}

	button {
		display: inline-block;
		width: 80%;
		margin-top: 1.2em;
		padding: 1em;
		max-width: 220px;
		font-size: 0.9em;
		color: #d42d78;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.15em;
		background: white;
		border: none;
		outline: none;
		border-radius: 5em;
		box-shadow: 0 15px 20px -10px rgba(0, 0, 0, 0.3);
		transition:
			color 0.6s,
			box-shadow 0.3s,
			transform 0.3s;
		cursor: pointer;
	}

	button:hover {
		box-shadow: 0 3px 5px -5px rgba(0, 0, 0, 0.3);
		color: #6f6f6f;
	}
</style>
