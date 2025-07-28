<script>
	import { ourServices } from '$lib/utils/data';
	import ServiceItem from './ServiceItem.svelte';
</script>

<div class="flex flex-col gap-3.5 mt-5 xl:mt-4">
	{#each ourServices as service, index}
		<ServiceItem name={service.name} />
	{/each}
</div> 