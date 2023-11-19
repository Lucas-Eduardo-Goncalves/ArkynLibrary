import type { HTMLAttributes } from "react";

export type TableBodyProps = {
  isEmpty?: boolean;
} & HTMLAttributes<HTMLTableSectionElement>;
