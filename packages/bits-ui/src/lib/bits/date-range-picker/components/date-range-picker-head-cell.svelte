<script lang="ts">
	import { getCtx } from "../ctx.js";
	import type { HeadCellProps } from "../index.js";

	type $$Props = HeadCellProps;
	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const { getCalendarAttrs } = getCtx();

	const attrs = getCalendarAttrs("head-cell");
</script>

{#if asChild}
	<slot {attrs} />
{:else}
	<th bind:this={el} {...$$restProps} {...attrs}>
		<slot />
	</th>
{/if}
