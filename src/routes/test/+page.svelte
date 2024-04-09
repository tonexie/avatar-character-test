<script>
	import Question from '$lib/components/question/Question.svelte';
	import BackgroundImg from '$lib/components/BackgroundImg.svelte';

	let refresher = 0;

	function refreshBackground() {
		refresher++;
	}
</script>

<BackgroundImg {refresher} />
<Question on:next={refreshBackground} />
