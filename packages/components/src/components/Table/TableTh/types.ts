import { ThHTMLAttributes } from "react";

export type TableThProps = {
  sorter?: string;
} & ThHTMLAttributes<HTMLTableCellElement>;
