import type { TextareaHTMLAttributes } from "react";
import type { MultilineModel } from "../../models";

export type MultilineProps = Partial<MultilineModel> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "size">;
