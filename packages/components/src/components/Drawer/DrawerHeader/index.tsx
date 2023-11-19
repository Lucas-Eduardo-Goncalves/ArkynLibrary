import { X } from "lucide-react";

import { useDrawerContainer } from "../_context";
import * as styles from "./styles.css";
import type { DrawerHeaderProps } from "./types";

export function DrawerHeader(props: DrawerHeaderProps) {
  const {
    children,
    showCloseButton = true,
    iconXColor = "var(--slate-400)",
    borderBottom = "1px solid var(--slate-300)",
    space = "md",
    style,
    ...rest
  } = props;
  const { makeInvisible } = useDrawerContainer();

  return (
    <header
      className={styles.container({ space })}
      style={{ borderBottom, ...style }}
      {...rest}
    >
      <div className={styles.container_children}>{children}</div>
      {showCloseButton && (
        <button
          type="button"
          onClick={makeInvisible}
          className={styles.container_button}
        >
          <X size={19.2} color={iconXColor} />
        </button>
      )}
    </header>
  );
}
