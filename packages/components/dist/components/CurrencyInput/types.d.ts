import type { InputHTMLAttributes } from "react";
import { InputModel } from "../../models";
export type CurrencyInputProps = Partial<InputModel> & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "size" | "value" | "onChange" | "defaultValue" | "onKeyDown"> & {
    value?: number;
    onChange?: (e: number) => void;
    defaultValue?: number;
    max?: number;
};
//# sourceMappingURL=types.d.ts.map