import * as styles from "./styles.css";
import type { ModalFooterProps } from "./types";

export function ModalFooter(props: ModalFooterProps) {
  const {
    children,
    direction = "row",
    justify = "end",
    borderTop = "1px solid var(--slate-300)",
    space = "md",
    spacing = "md",
    style,
    ...rest
  } = props;
  return (
    <footer
      style={{ borderTop, ...style }}
      className={styles.container({ space, spacing, direction, justify })}
      {...rest}
    >
      {children}
    </footer>
  );
}
