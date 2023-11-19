import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PopoverProps, PositionProps } from "./types";

import {
	contentContainerStyle,
	popoverContainerStyle,
	popoverOverlayStyle,
} from "./styles.css";
import { calcPosition } from "./calcPosition";

export function Popover({
	children,
	button,
	isOpen: importantIsOpen,
	closeOnClick,
	boxShadow = "xs",
	position = "bottom-right",
}: PopoverProps) {
	const popoverContentRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [direction, setDirection] = useState<PositionProps>(position);

	useEffect(() => {
		calcPosition({
			initialPosition: position,
			popoverContentRef,
			setDirection,
		});
	}, [direction, position]);

	const popoverState = importantIsOpen !== undefined ? importantIsOpen : isOpen;

	return (
		<div className={popoverContainerStyle}>
			<span onClick={() => setIsOpen(true)}>{button}</span>

			<motion.div
				ref={popoverContentRef}
				style={{ visibility: popoverState ? "visible" : "hidden" }}
				transition={{ ease: "easeOut", duration: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: popoverState ? 1 : 0 }}
				exit={{ opacity: 0 }}
				onClick={() => closeOnClick && setIsOpen(false)}
				className={contentContainerStyle({ position: direction, boxShadow })}
			>
				{children}
			</motion.div>

			{popoverState && (
				<span
					onClick={() => setIsOpen(false)}
					className={popoverOverlayStyle}
				/>
			)}
		</div>
	);
}
