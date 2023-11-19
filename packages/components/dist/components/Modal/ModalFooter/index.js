import { jsx as _jsx } from "react/jsx-runtime";
import * as styles from "./styles.css";
export function ModalFooter(props) {
    const { children, direction = "row", justify = "end", borderTop = "1px solid var(--slate-300)", space = "md", spacing = "md", style, ...rest } = props;
    return (_jsx("footer", { style: { borderTop, ...style }, className: styles.container({ space, spacing, direction, justify }), ...rest, children: children }));
}
