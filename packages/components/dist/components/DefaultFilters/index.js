import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useLocation } from "@remix-run/react";
export function DefaultFilters() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const paramsArray = [];
    searchParams.forEach((value, key) => {
        paramsArray.push([key, value]);
    });
    return (_jsx(_Fragment, { children: paramsArray.map(([key, value]) => (_jsx("input", { type: "hidden", name: key, value: value }))) }));
}
