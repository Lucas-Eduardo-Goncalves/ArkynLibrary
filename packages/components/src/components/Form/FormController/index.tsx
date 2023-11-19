import { createContext, useContext, useId, useRef, useState } from "react";
import { container } from "./styles.css";

import type { FormControllerProps, FormControllerContextData } from "./types";
import ReactInputMask from "react-input-mask";

const FormControllerContext = createContext({} as FormControllerContextData);

export function FormController(props: FormControllerProps) {
  const {
    direction = "column",
    space = "unset",
    spacing = "xxs",
    ...rest
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const id = useId();

  const checkboxRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputMaskRef = useRef<ReactInputMask>(null);

  return (
    <FormControllerContext.Provider
      value={{
        id,
        isChecked,
        inputMaskRef,
        setIsChecked,
        checkboxRef,
        inputRef,
        textareaRef,
      }}
    >
      <div className={container({ direction, space, spacing })} {...rest} />
    </FormControllerContext.Provider>
  );
}

export function useFormController() {
  const context = useContext(FormControllerContext);
  return context;
}
