import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { useModalContainer } from "../_context";
import * as styles from "./styles.css";
export function ModalHeader(props) {
    const { children, showCloseButton = true, iconXColor = "var(--slate-400)", borderBottom = "1px solid var(--slate-300)", space = "md", style, ...rest } = props;
    const { makeInvisible } = useModalContainer();
    return (_jsxs("header", { style: { borderBottom, ...style }, className: styles.container({ space }), ...rest, children: [_jsx("div", { className: styles.container_children, children: children }), showCloseButton && (_jsx("button", { type: "button", onClick: makeInvisible, className: styles.container_button, children: _jsx(X, { size: 19.2, color: iconXColor }) }))] }));
}
