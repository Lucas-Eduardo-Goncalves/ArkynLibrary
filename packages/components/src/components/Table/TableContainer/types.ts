import type { TableHTMLAttributes } from "react";

export type TableContainerProps = {
  variant?: "default" | "card";
} & TableHTMLAttributes<HTMLTableElement>;
