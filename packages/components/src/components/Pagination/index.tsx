import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useArkyn, useScopedParams } from "../../hooks";
import * as styles from "./styles.css";
import type { PaginationProps } from "./types";

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination(props: PaginationProps) {
  const { pagination } = useArkyn();
  const defaultProps = { ...pagination, ...props };

  const {
    scope,
    totalCountRegisters,
    siblingsCount = 5,
    spacing,
    colorScheme,
    fontSize,
    fontWeight,
    radii,
    space,
    size,
    variant,
  } = defaultProps;

  const navigate = useNavigate();
  const { getParam, getScopedSearch } = useScopedParams(scope);

  const currentPage = Number(getParam("page")) || 1;
  const registerPerPage = Number(getParam("per_page")) || 20;

  const lastPage = Math.ceil(totalCountRegisters / registerPerPage);

  const previosPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  function handlePageChange(page: number) {
    navigate(getScopedSearch({ page }));
  }

  return (
    <div className={styles.paginationContainer({ spacing })}>
      <button
        className={styles.paginationButton({
          colorScheme,
          fontSize,
          fontWeight,
          radii,
          size,
          space,
          variant: "simple",
        })}
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft
          color="var(--normal-color)"
          style={{ minHeight: "16px", minWidth: "16px" }}
        />
      </button>

      {currentPage > 1 + siblingsCount && (
        <>
          <button
            className={styles.paginationButton()}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {currentPage > 2 + siblingsCount && (
            <button
              disabled
              className={styles.paginationButton({
                colorScheme,
                fontSize,
                fontWeight,
                radii,
                size,
                space,
                variant,
              })}
            >
              ...
            </button>
          )}
        </>
      )}

      {previosPages.length > 0 &&
        previosPages.map((page, index) => {
          return (
            <button
              key={"back-page-" + index}
              onClick={() => handlePageChange(page)}
              className={styles.paginationButton({
                variant: "simple",
                fontSize,
                fontWeight,
              })}
            >
              {page}
            </button>
          );
        })}

      <button
        className={styles.paginationButton({
          colorScheme,
          fontSize,
          fontWeight,
          radii,
          size,
          space,
          variant,
        })}
        disabled
      >
        {currentPage}
      </button>

      {nextPages.length > 0 &&
        nextPages.map((page, index) => {
          return (
            <button
              key={"next-page-" + index}
              onClick={() => handlePageChange(page)}
              className={styles.paginationButton({
                variant: "simple",
                fontSize,
                fontWeight,
              })}
            >
              {page}
            </button>
          );
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <button
              disabled
              className={styles.paginationButton({
                colorScheme,
                fontSize,
                fontWeight,
                radii,
                size,
                space,
                variant,
              })}
            >
              ...
            </button>
          )}
          <button
            className={styles.paginationButton()}
            onClick={() => handlePageChange(lastPage)}
          >
            {lastPage}
          </button>
        </>
      )}

      <button
        className={styles.paginationButton({
          colorScheme,
          fontSize,
          fontWeight,
          radii,
          size,
          space,
          variant: "simple",
        })}
        disabled={currentPage >= lastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight
          color="var(--normal-color)"
          style={{ minHeight: "16px", minWidth: "16px" }}
        />
      </button>
    </div>
  );
}
