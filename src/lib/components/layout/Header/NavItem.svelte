<script>
	export let href = '';
	export let label = '';
</script>

<div class="flex items-center cursor-pointer">
	<a
		{href}
		class="font-figtree text-dark-gray text-[18px] font-medium hover:text-primary transition-colors"
	>
		{label}
	</a>
</div> 