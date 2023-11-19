import { TdHTMLAttributes } from "react";

export type TableTdProps = {
  isFirst?: boolean;
  isLast?: boolean;
} & TdHTMLAttributes<HTMLTableDataCellElement>;
