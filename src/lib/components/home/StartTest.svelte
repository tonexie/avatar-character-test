<script>
	import { userAnswers } from '$lib/data/userAnswersStore.js';
	import { goto } from '$app/navigation';
	import { preloadImages } from '$lib/utils/preloadImages.js';
	import imageUrls from '$lib/components/background/backgroundImgs.js';
	import { getInitialState } from '$lib/data/userAnswersStore.js';

	async function resetCharacterAnswers() {
		userAnswers.set(getInitialState());
		await preloadImages(imageUrls);
		await goto('/test');
	}
</script>

<div class="h-screen flex justify-center items-end m-0 p-0">
	<button on:click={resetCharacterAnswers} class="button mb-8 bg-primary-500 hover:bg-primary-100  text-primary-900">
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svgIcon" viewBox="0 0 16 16">
			<path
				d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
			/>
		</svg>
	</button>
</div>

<style>
	.button {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: none;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow:
			0 10px 20px rgba(0, 0, 0, 0.2),
			0 6px 6px rgba(0, 0, 0, 0.23);
		cursor: pointer;
		transition-duration: 0.3s;
		/* overflow: hidden; */
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
		align-items: center;
		animation: none;
	}

	.button:hover .svgIcon {
		/* width: 20px; */
		transition-duration: 0.3s;
		transform: translateY(-150%);
		opacity: 0;
	}

	.button::before {
		position: absolute;
		bottom: -20px;
		content: 'Start Character Test!';
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
