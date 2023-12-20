import { useActionData } from "@remix-run/react";
import { useState } from "react";
import ReactInputMask from "react-input-mask";

import { useFormController } from "../Form/FormController";
import * as styles from "./styles.css";
import type { SimpleInput } from "./types";

export function Simple(props: SimpleInput) {
  const {
    id,
    fontSize = "md",
    fontWeight = "regular",
    spacing = "sm",
    radii = "md",
    size = "md",
    space = "sm",
    variant = "default",
    colorScheme = "indigo",
    icon: Icon,
    iconSize = 20,
    onChange = () => {},
    iconStrokeWidth = 2,
    iconColor = "var(--slate-400)",
    name,
    style,
    bg,
    type,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const { id: inputId, inputRef } = useFormController();

  const actionData = useActionData<any>();
  const borderError = isFocused
    ? `2px solid var(--${colorScheme}-600)`
    : actionData?.fieldErrors?.[name]
    ? "2px solid var(--red-600)"
    : undefined;

  const colorIcon = isFocused
    ? `var(--${colorScheme}-600)`
    : actionData?.fieldErrors?.[name]
    ? " var(--red-600)"
    : iconColor;

  function handleFocus() {
    if (inputRef?.current) inputRef.current.focus();
  }

  function setInputRef(element: HTMLInputElement) {
    if (!inputRef.current) inputRef.current = element;
  }

  return (
    <div
      onClick={handleFocus}
      className={styles.group({ radii, size, space, spacing, variant })}
      style={{
        borderColor: borderError ? "transparent" : undefined,
        outline: borderError,
        background: bg || undefined,
        ...style,
      }}
    >
      {Icon && (
        <Icon size={iconSize} strokeWidth={iconStrokeWidth} color={colorIcon} />
      )}

      <ReactInputMask
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
        id={id || inputId}
        onChange={(e) => onChange(e)}
        className={styles.container({ fontSize, fontWeight })}
        inputRef={(el) => setInputRef(el)}
        {...rest}
      />
    </div>
  );
}
