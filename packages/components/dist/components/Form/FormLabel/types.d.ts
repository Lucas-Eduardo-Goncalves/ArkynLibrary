import { LabelHTMLAttributes } from "react";
export type CheckboxLabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "className"> & {
    font?: "default" | "code";
    fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    fontWeight?: "bold" | "light" | "extra-light" | "regular" | "semibold" | "extra-bold";
};
//# sourceMappingURL=types.d.ts.map