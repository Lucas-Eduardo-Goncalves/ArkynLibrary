import { useTableContainer } from "../TableContainer";
import { useTableRow } from "../TableRow";
import { container } from "./styles.css";
import type { TableTdProps } from "./types";

export function TableTd({ isFirst, isLast, style, ...rest }: TableTdProps) {
  const { variant } = useTableContainer();
  const { isHover } = useTableRow();
  return (
    <td
      className={container({
        isFirst,
        isLast,
        variant,
      })}
      style={{
        background: isHover ? "var(--table-row-background-hover)" : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}
