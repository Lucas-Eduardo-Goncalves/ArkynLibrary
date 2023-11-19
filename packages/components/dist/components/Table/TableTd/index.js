import { jsx as _jsx } from "react/jsx-runtime";
import { useTableContainer } from "../TableContainer";
import { useTableRow } from "../TableRow";
import { container } from "./styles.css";
export function TableTd({ isFirst, isLast, style, ...rest }) {
    const { variant } = useTableContainer();
    const { isHover } = useTableRow();
    return (_jsx("td", { className: container({
            isFirst,
            isLast,
            variant,
        }), style: {
            background: isHover ? "var(--table-row-background-hover)" : undefined,
            ...style,
        }, ...rest }));
}
