import type { HTMLAttributes } from "react";

export type ModalHeaderProps = Omit<
  HTMLAttributes<HTMLElement>,
  "className"
> & {
  showCloseButton?: boolean;
  iconXColor?: string;
  borderBottom?: string;
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};
