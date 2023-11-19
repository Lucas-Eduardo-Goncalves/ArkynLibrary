import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useArkyn, useScopedParams } from "../../hooks";
import * as styles from "./styles.css";
function generatePagesArray(from, to) {
    return [...new Array(to - from)]
        .map((_, index) => {
        return from + index + 1;
    })
        .filter((page) => page > 0);
}
export function Pagination(props) {
    const { pagination } = useArkyn();
    const defaultProps = { ...pagination, ...props };
    const { scope, totalCountRegisters, siblingsCount = 5, spacing, colorScheme, fontSize, fontWeight, radii, space, size, variant, } = defaultProps;
    const navigate = useNavigate();
    const { getParam, getScopedSearch } = useScopedParams(scope);
    const currentPage = Number(getParam("page")) || 1;
    const registerPerPage = Number(getParam("per_page")) || 20;
    const lastPage = Math.ceil(totalCountRegisters / registerPerPage);
    const previosPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];
    function handlePageChange(page) {
        navigate(getScopedSearch({ page }));
    }
    return (_jsxs("div", { className: styles.paginationContainer({ spacing }), children: [_jsx("button", { className: styles.paginationButton({
                    colorScheme,
                    fontSize,
                    fontWeight,
                    radii,
                    size,
                    space,
                    variant: "simple",
                }), disabled: currentPage <= 1, onClick: () => handlePageChange(currentPage - 1), children: _jsx(ChevronLeft, { color: "var(--normal-color)", style: { minHeight: "16px", minWidth: "16px" } }) }), currentPage > 1 + siblingsCount && (_jsxs(_Fragment, { children: [_jsx("button", { className: styles.paginationButton(), onClick: () => handlePageChange(1), children: "1" }), currentPage > 2 + siblingsCount && (_jsx("button", { disabled: true, className: styles.paginationButton({
                            colorScheme,
                            fontSize,
                            fontWeight,
                            radii,
                            size,
                            space,
                            variant,
                        }), children: "..." }))] })), previosPages.length > 0 &&
                previosPages.map((page, index) => {
                    return (_jsx("button", { onClick: () => handlePageChange(page), className: styles.paginationButton({
                            variant: "simple",
                            fontSize,
                            fontWeight,
                        }), children: page }, "back-page-" + index));
                }), _jsx("button", { className: styles.paginationButton({
                    colorScheme,
                    fontSize,
                    fontWeight,
                    radii,
                    size,
                    space,
                    variant,
                }), disabled: true, children: currentPage }), nextPages.length > 0 &&
                nextPages.map((page, index) => {
                    return (_jsx("button", { onClick: () => handlePageChange(page), className: styles.paginationButton({
                            variant: "simple",
                            fontSize,
                            fontWeight,
                        }), children: page }, "next-page-" + index));
                }), currentPage + siblingsCount < lastPage && (_jsxs(_Fragment, { children: [currentPage + 1 + siblingsCount < lastPage && (_jsx("button", { disabled: true, className: styles.paginationButton({
                            colorScheme,
                            fontSize,
                            fontWeight,
                            radii,
                            size,
                            space,
                            variant,
                        }), children: "..." })), _jsx("button", { className: styles.paginationButton(), onClick: () => handlePageChange(lastPage), children: lastPage })] })), _jsx("button", { className: styles.paginationButton({
                    colorScheme,
                    fontSize,
                    fontWeight,
                    radii,
                    size,
                    space,
                    variant: "simple",
                }), disabled: currentPage >= lastPage, onClick: () => handlePageChange(currentPage + 1), children: _jsx(ChevronRight, { color: "var(--normal-color)", style: { minHeight: "16px", minWidth: "16px" } }) })] }));
}
