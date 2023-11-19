import type { Dispatch, HTMLAttributes, MutableRefObject } from "react";
import ReactInputMask from "react-input-mask";

export type FormControllerContextData = {
  checkboxRef: MutableRefObject<HTMLInputElement>;
  inputRef: MutableRefObject<HTMLInputElement>;
  textareaRef: MutableRefObject<HTMLTextAreaElement>;
  inputMaskRef: MutableRefObject<ReactInputMask>;

  id: string;

  isChecked: boolean;
  setIsChecked: Dispatch<React.SetStateAction<boolean>>;
};

export type FormControllerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "className"
> & {
  direction?: "row" | "column";
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};
