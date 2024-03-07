import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "@remix-run/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTableContainer } from "../TableContainer";
import * as styles from "./styles.css";
import { useScopedParams } from "../../../hooks";
export function TableTh({ children, sorter, scope = "", ...rest }) {
    const navigate = useNavigate();
    const { getParam, getScopedSearch } = useScopedParams(scope);
    const { variant } = useTableContainer();
    const sorterActive = getParam("sorter");
    const sorterAscActive = sorter + ":asc" === sorterActive;
    const sorterDesActive = sorter + ":desc" === sorterActive;
    function handleSorter(type) {
        navigate(getScopedSearch({ sorter: sorter + type }));
    }
    return (_jsx("th", { className: styles.container({ variant }), ...rest, children: _jsxs("div", { className: styles.content, children: [children, sorter && (_jsxs("span", { style: {
                        position: "relative",
                        height: "23px",
                    }, children: [_jsx(ChevronUp, { onClick: () => handleSorter(":asc"), size: 14, style: { cursor: "pointer", position: "absolute", top: "0" }, color: sorterAscActive
                                ? "var(--table-th-chevron-color-active)"
                                : "var(--table-th-chevron-color)" }), _jsx(ChevronDown, { onClick: () => handleSorter(":desc"), size: 14, style: { cursor: "pointer", position: "absolute", bottom: "0" }, color: sorterDesActive
                                ? "var(--table-th-chevron-color-active)"
                                : "var(--table-th-chevron-color)" })] }))] }) }));
}
