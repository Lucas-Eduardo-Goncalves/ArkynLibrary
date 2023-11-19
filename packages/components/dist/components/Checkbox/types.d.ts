import type { ButtonHTMLAttributes } from "react";
import type { CheckboxModel } from "../../models";
export type CheckboxProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "defaultValue" | "value" | "children" | "type" | "onClick" | "onChange"> & Partial<CheckboxModel>;
//# sourceMappingURL=types.d.ts.map