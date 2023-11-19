import { jsx as _jsx } from "react/jsx-runtime";
import { useTableContainer } from "../TableContainer";
import { container } from "./styles.css";
export function TableHeaderRow(props) {
    const { variant } = useTableContainer();
    return _jsx("tr", { className: container({ variant }), ...props });
}
