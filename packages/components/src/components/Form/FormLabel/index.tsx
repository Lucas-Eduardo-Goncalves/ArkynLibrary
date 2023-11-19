import type { MouseEvent } from "react";

import type { CheckboxLabelProps } from "./types";
import { checkboxStyle } from "./styles.css";
import { useFormController } from "../FormController";

export function FormLabel(props: CheckboxLabelProps) {
  const { setIsChecked, id } = useFormController();
  const {
    font,
    style,
    htmlFor,
    color,
    fontSize,
    fontWeight,
    onClick,
    ...rest
  } = props;

  function handleOnClick(e: MouseEvent<HTMLLabelElement>) {
    setIsChecked((old) => !old);
    onClick(e);
  }

  return (
    <label
      htmlFor={htmlFor || id}
      onClick={handleOnClick}
      className={checkboxStyle({
        font,
        fontSize,
        fontWeight,
      })}
      style={{ color, ...style }}
      {...rest}
    />
  );
}
