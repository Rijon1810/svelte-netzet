<script>
	import NavItem from './NavItem.svelte';
	
	export let navItems = [];
</script>

<nav class="hidden xl:flex gap-6" aria-label="Main navigation">
	{#each navItems as navItem, index}
		<NavItem href={navItem.href} label={navItem.label} />
	{/each}
</nav> 