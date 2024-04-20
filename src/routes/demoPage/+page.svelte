<script>
	let name = 'tone';

	let number = 5;
	$: result = number * 2;

	let isLoggedIn = false;

	let fruits = ['Apple', 'Banana', 'Cherry'];

	let age = 26;
</script>

<div class="flex flex-col justify-center items-center mt-20 p-8">
	<h1 class="text-2xl font-bold">THIS IS A CODE DEMO PAGE FOR TECH DEMO!</h1>

	<!-- reactive declarations -->
	<h1 class="p-6">Hello {name}!</h1>

	<!-- reactive statement -->
	<p class="p-6">{number} times 2 is {result}</p>

	<!-- Conditional render -->
	<button on:click={() => (isLoggedIn = !isLoggedIn)} class="p-6">
		{isLoggedIn ? 'Log out' : 'Log in'}
	</button>

	{#if isLoggedIn}
		<p>Welcome back, user!</p>
	{:else}
		<p>Please log in to continue.</p>
	{/if}

	<!-- data loop render -->
	<ul class="p-6">
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>

	<input type="number" bind:value={age} />
	<p>Your age is {age}.</p>
</div>
