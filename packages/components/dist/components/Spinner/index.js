import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { spinnerStyle } from "./styles.css";
export function Spinner({ size = "xs", colorScheme = "indigo" }) {
    return (_jsx(motion.div, { animate: { rotate: "360deg" }, transition: { ease: "easeInOut", repeat: Infinity, duration: 1 }, className: spinnerStyle({ colorScheme, size }) }));
}
