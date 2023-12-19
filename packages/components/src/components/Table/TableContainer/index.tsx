import { createContext, useContext } from "react";

import { TableContainerProps } from "./types";
import * as styles from "./styles.css";

type TableContainerContextData = {
  variant: "default" | "card";
};

const TableContainerContext = createContext({} as TableContainerContextData);

export function TableContainer({
  variant = "default",
  containerStyle,
  ...props
}: TableContainerProps) {
  return (
    <TableContainerContext.Provider value={{ variant }}>
      <div className={styles.container({ variant })} style={containerStyle}>
        <table className={styles.content({ variant })} {...props} />
      </div>
    </TableContainerContext.Provider>
  );
}

export function useTableContainer() {
  const context = useContext(TableContainerContext);
  return context;
}
