import { ThHTMLAttributes } from "react";

export type TableThProps = {
  sorter?: string;
  scope?: string;
} & ThHTMLAttributes<HTMLTableCellElement>;
