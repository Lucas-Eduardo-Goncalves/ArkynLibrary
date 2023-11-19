import { useActionData } from "@remix-run/react";

import type { InputProps } from "./types";
import * as styles from "./styles.css";
import { useState } from "react";
import { useFormController } from "../Form/FormController";
import { useArkyn } from "../../hooks";

export function Input(props: InputProps) {
  const { input } = useArkyn();
  const defaultProps = { ...input, ...props };

  const {
    colorScheme,
    bg,
    iconSize,
    iconColor,
    icon: Icon,
    fontSize,
    fontWeight,
    radii,
    size,
    space,
    spacing,
    variant,
    disabled,
    iconStrokeWidth,
    name,
    children,
    style,
    id,
    ...rest
  } = defaultProps;

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

      <input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
        id={id || inputId}
        className={styles.container({ fontSize, fontWeight })}
        {...rest}
      />
    </div>
  );
}
