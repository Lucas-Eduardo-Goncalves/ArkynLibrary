import type { InputHTMLAttributes } from "react";
import { InputModel } from "../../models";

export type InputProps = Partial<InputModel> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "size">;
