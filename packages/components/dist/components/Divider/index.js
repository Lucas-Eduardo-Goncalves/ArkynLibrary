import { jsx as _jsx } from "react/jsx-runtime";
import { container } from "./styles.css";
export function Divider({ direction, color = undefined }) {
    return (_jsx("div", { className: container({ direction }), style: { background: color } }));
}
