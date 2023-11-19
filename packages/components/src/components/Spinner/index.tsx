import { motion } from "framer-motion";
import { spinnerStyle } from "./styles.css";
import type { SpinnerProps } from "./types";

export function Spinner({ size = "xs", colorScheme = "indigo" }: SpinnerProps) {
  return (
    <motion.div
      animate={{ rotate: "360deg" }}
      transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
      className={spinnerStyle({ colorScheme, size })}
    />
  );
}
