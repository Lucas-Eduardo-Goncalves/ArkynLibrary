import type { HTMLAttributes } from "react";
export type DrawerHeaderProps = Omit<HTMLAttributes<HTMLElement>, "className"> & {
    showCloseButton?: boolean;
    iconXColor?: string;
    borderBottom?: string;
    space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};
//# sourceMappingURL=types.d.ts.map