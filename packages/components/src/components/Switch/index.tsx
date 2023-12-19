import { motion } from "framer-motion";
import { type MouseEvent, useState } from "react";

import { generateCSS } from "./styles";
import type { SwitchProps } from "./types";
import { useArkyn } from "../../hooks";

export function Switch(props: SwitchProps) {
  const { switch: _switch } = useArkyn();
  const defaultProps = { ..._switch, ...props };

  const {
    size,
    checked: forcedChecked = undefined,
    onCheck,
    colorScheme,
    defaultChecked,
    name,
  } = defaultProps;

  const [isChecked, setIsChecked] = useState(
    forcedChecked ?? defaultChecked ?? false
  );
  const [gradientLeftColor, setGradientLeftColor] = useState(() => {
    if (isChecked) return `var(--${colorScheme}-500)`;
    return "var(--slate-200)";
  });

  const css = generateCSS({ gradientLeftColor, isChecked, size });

  function handleCheck(e: MouseEvent<HTMLButtonElement>) {
    setIsChecked((old) => {
      if (old) setTimeout(() => setGradientLeftColor("var(--slate-200)"), 100);
      else setGradientLeftColor(`var(--${colorScheme}-500)`);
      return !old;
    });

    onCheck(e);
  }

  return (
    <>
      <input type="hidden" name={name} value={String(isChecked)} />
      <button type="button" style={css.container} onClick={handleCheck}>
        <motion.div
          initial={css.background_animation}
          animate={css.background_animation}
          transition={{ duration: 0.1 }}
          style={css.background_container}
        >
          <div style={css.circle_container} />
        </motion.div>
      </button>
    </>
  );
}
