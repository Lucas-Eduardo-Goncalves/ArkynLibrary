import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function TableBody({ children, isEmpty, ...rest }) {
    return (_jsxs("tbody", { ...rest, children: [!isEmpty && children, isEmpty && _jsx("h5", { children: "Tabela vazia" })] }));
}
