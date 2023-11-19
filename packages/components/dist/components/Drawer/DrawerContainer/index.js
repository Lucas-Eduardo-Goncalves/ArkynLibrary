import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { DrawerContainerContext } from "../_context";
import * as styles from "./styles.css";
export function DrawerContainer(props) {
    const { isVisible, makeInvisible, showOverlay = true, direction, ...rest } = props;
    const translateX = direction === "left" ? "-100%" : "100%";
    return (_jsx(DrawerContainerContext.Provider, { value: { isVisible, makeInvisible }, children: _jsx(AnimatePresence, { children: isVisible && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: styles.container({ direction, showOverlay }), transition: { ease: "easeOut", duration: 0.15 }, initial: { transform: `translateX(${translateX})` }, animate: { transform: "translateX(0px)" }, exit: { transform: `translateX(${translateX})` }, ...rest }), showOverlay && (_jsx(motion.div, { transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: makeInvisible, className: styles.overlay }))] })) }) }));
}
