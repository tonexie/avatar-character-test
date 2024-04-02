<script>
	import questions from '$lib/data/questions.js';
	import { userAnswers } from '$lib/data/userAnswersStore.js';

	let rating = '';
	let currQ = 0;

	function handleSubmit() {
		console.log('Selected rating:', rating);
		const charRes = questions[currQ].response;

    // algorithm for updating character scores
		for (let i = 0; i < charRes.length; i++) {
			const charScore = Math.abs(charRes[i].response - rating);
			const currChar = charRes[i].character;
			$userAnswers[i][`${currChar}`] += charScore;
		}
    currQ++
	}
</script>

<div class="flex justify-center items-center h-screen">
	<div
		class="flex flex-col justify-between items-center bg-white p-8 rounded-lg shadow-lg w-[70%] h-[60%]"
	>
		<h1 class=" text-3xl font-bold pb-4">Question {questions[currQ].id}</h1>
		<p>{questions[currQ].question}</p>

		<div class="flex justify-between w-full">
			<p class="w-[40%] text-center">{questions[currQ].options[0]}</p>
			<p>OR</p>
			<p class="w-[40%] text-center">{questions[currQ].options[1]}</p>
		</div>

		<form on:submit|preventDefault={handleSubmit} class="flex flex-col items-center w-full">
			<div class="flex w-[70%] justify-between m-auto">
				{#each [1, 2, 3, 4, 5] as rate}
					<label class="flex flex-col items-center">
						<input type="radio" bind:group={rating} value={rate} />
						{rate}
					</label>
				{/each}
			</div>

			<button type="submit">Next Question</button>
		</form>
	</div>
</div>
