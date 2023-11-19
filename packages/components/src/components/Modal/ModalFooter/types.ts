import { HTMLAttributes } from "react";

export type ModalFooterProps = Omit<
  HTMLAttributes<HTMLElement>,
  "className"
> & {
  direction?: "column" | "row";
  justify?: "center" | "start" | "end";
  borderTop?: string;
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};
