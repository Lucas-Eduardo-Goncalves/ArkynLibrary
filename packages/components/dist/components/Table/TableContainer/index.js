import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import * as styles from "./styles.css";
const TableContainerContext = createContext({});
export function TableContainer({ variant = "default", containerStyle, ...props }) {
    return (_jsx(TableContainerContext.Provider, { value: { variant }, children: _jsx("div", { className: styles.container({ variant }), style: containerStyle, children: _jsx("table", { className: styles.content({ variant }), ...props }) }) }));
}
export function useTableContainer() {
    const context = useContext(TableContainerContext);
    return context;
}
