<script>
	import { navItems } from '$lib/utils/data';
	import NavBar from './NavBar.svelte';
	import Menu from './Menu.svelte';
	import Logo from './Logo.svelte';
</script>

<header class="flex w-full 2xl:max-w-[1536px] mx-auto items-center xl:items-start justify-between px-[29px] xl:px-[211px] mt-4 xl:mt-[35px]">
	<div class="flex xl:hidden" aria-hidden="true"></div>
	<Logo />
	<NavBar {navItems} />
	<Menu />
</header> 