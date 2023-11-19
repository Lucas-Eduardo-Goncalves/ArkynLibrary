import { createContext, useContext, useState } from "react";
import { useTableContainer } from "../TableContainer";
import { container } from "./styles.css";
import { TableTrProps } from "./types";

const TableRowContext = createContext({} as { isHover: boolean });

export function useTableRow() {
  const context = useContext(TableRowContext);
  return context;
}

export function TableRow(props: TableTrProps) {
  const { onMouseEnter, onMouseLeave, ...rest } = props;
  const { variant } = useTableContainer();
  const [isHover, setIsHover] = useState(false);

  return (
    <TableRowContext.Provider value={{ isHover }}>
      <tr
        onMouseEnter={(e) => {
          setIsHover(true);
          onMouseEnter && onMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          setIsHover(false);
          onMouseLeave && onMouseLeave(e);
        }}
        className={container({ variant })}
        {...rest}
      />
    </TableRowContext.Provider>
  );
}
