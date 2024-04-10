<script>
	import { userAnswers, resetAnswers } from '$lib/data/userAnswersStore.js';
	import { goto } from '$app/navigation';

	const INITIAL_ANSWERS_STATE = [
		{ Aang: 0, slug: 'aang' },
		{ Katara: 0, slug: 'katara' },
		{ Sokka: 0, slug: 'sokka' },
		{ Toph: 0, slug: 'toph' },
		{ Suki: 0, slug: 'suki' },
		{ Azula: 0, slug: 'azula' },
		{ Zuko: 0, slug: 'zuko' },
		{ Tenzin: 0, slug: 'tenzin' },
		{ Korra: 0, slug: 'korra' },
		{ 'Lin Beifong': 0, slug: 'lin_beifong' },
		{ Asami: 0, slug: 'asami' }
	];

	async function resetCharacterAnswers() {
		$userAnswers = INITIAL_ANSWERS_STATE;
		console.log('user', $userAnswers);
		await goto('/test');
	}
</script>

<div class="h-screen flex justify-center items-end m-0 p-0">
	<button on:click={resetCharacterAnswers} class="button mb-8">
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svgIcon" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
    </svg>
	</button>

</div>

<style>
	.button {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #d62828;
		border: none;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
		cursor: pointer;
		transition-duration: 0.3s;
		overflow: hidden;
		position: relative;
    animation: pulse 2s infinite;
	}

  @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

	.svgIcon {
		width: 40px;
		transition-duration: 0.3s;
    padding-left: 3px;
	}

	.svgIcon path {
		fill: white;
	}

	.button:hover {
		width: 240px;
		border-radius: 50px;
		transition-duration: 0.3s;
		background-color: #003049;
		align-items: center;
    animation: none;
	}

	.button:hover .svgIcon {
		/* width: 20px; */
		transition-duration: 0.3s;
		transform: translateY(-150%);
	}

	.button::before {
		position: absolute;
		bottom: -20px;
		content: 'Start Character Test!';
		color: white;
		/* transition-duration: .3s; */
		font-size: 0px;
	}

	.button:hover::before {
		font-size: 20px;
		opacity: 1;
		bottom: unset;
		/* transform: translateY(-30px); */
		transition-duration: 0.3s;
	}
</style>
