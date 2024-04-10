<script>
  const logo = '/images/avatar-logo.png'
	import { preloadImages } from '$lib/utils/preloadImages.js';
  preloadImages([`/images/avatar-hero-v2.jpg`]);
</script>

<header class='py-4 px-4 sm:px-10  font-[sans-serif] min-h-[70px]'>
  <div class='flex flex-wrap items-center justify-between gap-5 relative'>
    <a href="/"><img src={logo} alt="logo" class='w-36' />
    </a>
    <div class='flex lg:order-1 max-sm:ml-auto'>
      <button
        class='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#003049] bg-[#003049] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#003049]'>Info</button>
      <button
        class='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#003049] bg-[#003049] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#003049] ml-3'>Credits</button>
    </div>
  </div>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0);
  }
</style>