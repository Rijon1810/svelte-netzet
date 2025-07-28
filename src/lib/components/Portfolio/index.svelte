<script>
	import OurServices from './OurServices/index.svelte';
	import CTAButton from '../Button/CTAButton.svelte';
	import FooterNotice from '../FooterNotice/index.svelte';
</script>

<section class="w-full px-5 xl:px-0">
	<h2 class="text-white text-2xl xl:text-[35px] font-bold text-center xl:text-start line-height-normal">
		Want to Turn Social Media Into a Profitable Career?
	</h2>
	<h3 class="text-[#00E7F9] font-urbanist text-2xl xl:text-[35px] font-bold text-center xl:text-start mt-2 line-height-normal drop-shadow-[0_4px_4px_#FC004E]">
		Discover your way to success with Fametonic:
	</h3>

	<OurServices />

	<div class="w-full flex flex-col-reverse xl:flex-col items-center text-center xl:text-start xl:items-start justify-center md:justify-start">
		<CTAButton />
		<FooterNotice />
	</div>
</section> 