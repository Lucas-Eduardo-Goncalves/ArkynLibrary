import { X } from "lucide-react";
import type { ModalHeaderProps } from "./types";

import { useModalContainer } from "../_context";
import * as styles from "./styles.css";

export function ModalHeader(props: ModalHeaderProps) {
  const {
    children,
    showCloseButton = true,
    iconXColor = "var(--slate-400)",
    borderBottom = "1px solid var(--slate-300)",
    space = "md",
    style,
    ...rest
  } = props;
  const { makeInvisible } = useModalContainer();

  return (
    <header
      style={{ borderBottom, ...style }}
      className={styles.container({ space })}
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
