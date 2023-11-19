import { useTableContainer } from "../TableContainer";
import { container } from "./styles.css";
import { TableTrProps } from "./types";

export function TableHeaderRow(props: TableTrProps) {
  const { variant } = useTableContainer();
  return <tr className={container({ variant })} {...props} />;
}
