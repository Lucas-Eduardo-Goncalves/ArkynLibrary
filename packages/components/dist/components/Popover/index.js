import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contentContainerStyle, popoverContainerStyle, popoverOverlayStyle, } from "./styles.css";
import { calcPosition } from "./calcPosition";
export function Popover({ children, button, isOpen: importantIsOpen, closeOnClick, boxShadow = "xs", position = "bottom-right", }) {
    const popoverContentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState(position);
    useEffect(() => {
        calcPosition({
            initialPosition: position,
            popoverContentRef,
            setDirection,
        });
    }, [direction, position]);
    const popoverState = importantIsOpen !== undefined ? importantIsOpen : isOpen;
    return (_jsxs("div", { className: popoverContainerStyle, children: [_jsx("span", { onClick: () => setIsOpen(true), children: button }), _jsx(motion.div, { ref: popoverContentRef, style: { visibility: popoverState ? "visible" : "hidden" }, transition: { ease: "easeOut", duration: 0 }, initial: { opacity: 0 }, animate: { opacity: popoverState ? 1 : 0 }, exit: { opacity: 0 }, onClick: () => closeOnClick && setIsOpen(false), className: contentContainerStyle({ position: direction, boxShadow }), children: children }), popoverState && (_jsx("span", { onClick: () => setIsOpen(false), className: popoverOverlayStyle }))] }));
}
