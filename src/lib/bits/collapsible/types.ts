import type {
	HTMLDivAttributes,
	Transition,
	OmitOpen,
	Expand,
	OnChangeFn,
	AsChild,
	TransitionProps
} from "$internal/index.js";
import type { ButtonEventHandler } from "$lib/index.js";
import type { CreateCollapsibleProps } from "@melt-ui/svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

type Props = Expand<
	OmitOpen<CreateCollapsibleProps> & {
		open?: CreateCollapsibleProps["defaultOpen"] & {};
		onOpenChange?: OnChangeFn<CreateCollapsibleProps["defaultOpen"]> & {};
	}
> &
	AsChild &
	HTMLDivAttributes;

type ContentProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition
> = Expand<TransitionProps<T, In, Out> & AsChild> & HTMLDivAttributes;

type TriggerProps = AsChild & HTMLButtonAttributes;

type TriggerEvents = {
	"m-click": ButtonEventHandler<MouseEvent>;
};

export type {
	Props,
	ContentProps,
	TriggerProps,
	//
	Props as CollapsibleProps,
	ContentProps as CollapsibleContentProps,
	TriggerProps as CollapsibleTriggerProps,
	//
	TriggerEvents,
	//
	TriggerEvents as CollapsibleTriggerEvents
};