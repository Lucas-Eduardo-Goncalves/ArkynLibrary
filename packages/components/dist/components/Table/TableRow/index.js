import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { useTableContainer } from "../TableContainer";
import { container } from "./styles.css";
const TableRowContext = createContext({});
export function useTableRow() {
    const context = useContext(TableRowContext);
    return context;
}
export function TableRow(props) {
    const { onMouseEnter, onMouseLeave, ...rest } = props;
    const { variant } = useTableContainer();
    const [isHover, setIsHover] = useState(false);
    return (_jsx(TableRowContext.Provider, { value: { isHover }, children: _jsx("tr", { onMouseEnter: (e) => {
                setIsHover(true);
                onMouseEnter && onMouseEnter(e);
            }, onMouseLeave: (e) => {
                setIsHover(false);
                onMouseLeave && onMouseLeave(e);
            }, className: container({ variant }), ...rest }) }));
}
