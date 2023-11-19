import { LucideIcon } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { InputModel } from "../../models";

export type ColorInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "size" | "value" | "defaultValue"
> &
  Partial<InputModel> & {
    value?: string;
    defaultValue?: string;
  };
