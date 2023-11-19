import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { ModalContainerContext } from "../_context";
import * as styles from "./styles.css";
export function ModalContainer(props) {
    const { isVisible, makeInvisible, radii = "md", showOverlay = true, ...rest } = props;
    return (_jsx(ModalContainerContext.Provider, { value: { isVisible, makeInvisible }, children: _jsx(AnimatePresence, { children: isVisible && (_jsxs("aside", { className: styles.container, children: [_jsx(motion.div, { transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0, scale: 0.75 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, className: styles.content({ radii }), ...rest }), showOverlay && (_jsx(motion.div, { transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: makeInvisible, className: styles.overlay }))] })) }) }));
}
