<script>
	export let image = './images/avatar-landscape1.png';
</script>

<div class="container">
	<img src={image} alt="Avatar: The Last Airbender background" class="image" />
</div>

<style>
	.container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.01);
		max-width: none;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
	}

	.image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.1);
		width: auto;
		height: 100%;
		max-width: none;
		z-index: -1;
		overflow: hidden;
	}
</style>
