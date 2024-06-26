export { default as Root } from "./components/slider.svelte";
export { default as Range } from "./components/slider-range.svelte";
export { default as Thumb } from "./components/slider-thumb.svelte";
export { default as Input } from "./components/slider-input.svelte";
export { default as Tick } from "./components/slider-tick.svelte";

export type {
	SliderProps as Props,
	SliderRangeProps as RangeProps,
	SliderThumbProps as ThumbProps,
	SliderInputProps as InputProps,
	SliderTickProps as TickProps,
	//
	SliderThumbEvents as ThumbEvents,
} from "./types.js";
