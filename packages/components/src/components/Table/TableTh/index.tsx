import { useNavigate } from "@remix-run/react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { useTableContainer } from "../TableContainer";
import * as styles from "./styles.css";
import type { TableThProps } from "./types";
import { useScopedParams } from "../../../hooks";

export function TableTh({ children, sorter, ...rest }: TableThProps) {
  const navigate = useNavigate();
  const { getParam, getScopedSearch } = useScopedParams();
  const { variant } = useTableContainer();

  const sorterActive = getParam("sorter");

  const sorterAscActive = sorter + ":asc" === sorterActive;
  const sorterDesActive = sorter + ":desc" === sorterActive;

  function handleSorter(type: ":asc" | ":desc") {
    navigate(getScopedSearch({ sorter: sorter + type }));
  }

  return (
    <th className={styles.container({ variant })} {...rest}>
      <div className={styles.content}>
        {children}

        {sorter && (
          <span
            style={{
              position: "relative",
              height: "23px",
            }}
          >
            <ChevronUp
              onClick={() => handleSorter(":asc")}
              size={14}
              style={{ cursor: "pointer", position: "absolute", top: "0" }}
              color={
                sorterAscActive
                  ? "var(--table-th-chevron-color-active)"
                  : "var(--table-th-chevron-color)"
              }
            />

            <ChevronDown
              onClick={() => handleSorter(":desc")}
              size={14}
              style={{ cursor: "pointer", position: "absolute", bottom: "0" }}
              color={
                sorterDesActive
                  ? "var(--table-th-chevron-color-active)"
                  : "var(--table-th-chevron-color)"
              }
            />
          </span>
        )}
      </div>
    </th>
  );
}
