import type { ReactNode } from "react";

export type PositionProps =
	| "bottom-left"
	| "bottom-right"
	| "top-left"
	| "top-right"
	| "top"
	| "left"
	| "bottom"
	| "right"
	| undefined;

export type PopoverProps = {
	children: ReactNode;
	button: ReactNode;
	closeOnClick?: boolean;
	position?: PositionProps;
	isOpen?: boolean;
	boxShadow?: "xs" | "sm" | "md" | "lg";
};
