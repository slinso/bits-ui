<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, updatePositioning } from "../ctx.js";
	import type { ContentEvents, ContentProps } from "../index.js";
	import type { Transition } from "$lib/internal/types.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type T = $$Generic<Transition>;
	type In = $$Generic<Transition>;
	type Out = $$Generic<Transition>;
	type $$Props = ContentProps<T, In, Out>;
	type $$Events = ContentEvents;

	export let transition: $$Props["transition"] = undefined;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export let inTransition: $$Props["inTransition"] = undefined;
	export let inTransitionConfig: $$Props["inTransitionConfig"] = undefined;
	export let outTransition: $$Props["outTransition"] = undefined;
	export let outTransitionConfig: $$Props["outTransitionConfig"] = undefined;
	export let asChild: $$Props["asChild"] = false;
	export let id: $$Props["id"] = undefined;
	export let alignOffset: $$Props["alignOffset"] = 0;
	export let collisionPadding: $$Props["collisionPadding"] = 8;
	export let avoidCollisions: $$Props["avoidCollisions"] = true;
	export let collisionBoundary: $$Props["collisionBoundary"] = undefined;
	export let fitViewport: $$Props["fitViewport"] = false;
	export let strategy: $$Props["strategy"] = "absolute";
	export let overlap: $$Props["overlap"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { menu },
		states: { open },
		ids,
		getAttrs,
	} = getCtx();

	const dispatch = createDispatcher();
	const attrs = getAttrs("content");

	$: if (id) {
		ids.menu.set(id);
	}
	$: builder = $menu;
	$: Object.assign(builder, attrs);

	$: updatePositioning({
		alignOffset,
		collisionPadding,
		avoidCollisions,
		collisionBoundary,
		fitViewport,
		strategy,
		overlap,
	});
</script>

{#if asChild && $open}
	<slot {builder} />
{:else if transition && $open}
	<div
		bind:this={el}
		transition:transition={transitionConfig}
		use:melt={builder}
		{...$$restProps}
		on:m-keydown={dispatch}
	>
		<slot {builder} />
	</div>
{:else if inTransition && outTransition && $open}
	<div
		bind:this={el}
		in:inTransition={inTransitionConfig}
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		on:m-keydown={dispatch}
	>
		<slot {builder} />
	</div>
{:else if inTransition && $open}
	<div
		bind:this={el}
		in:inTransition={inTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		on:m-keydown={dispatch}
	>
		<slot {builder} />
	</div>
{:else if outTransition && $open}
	<div
		bind:this={el}
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		on:m-keydown={dispatch}
	>
		<slot {builder} />
	</div>
{:else if $open}
	<div bind:this={el} use:melt={builder} {...$$restProps} on:m-keydown={dispatch}>
		<slot {builder} />
	</div>
{/if}
