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
    iconStrokeWidth,
    name,
    children,
    style,
    id,
    isError,
    ...rest
  } = defaultProps;

  const [isFocused, setIsFocused] = useState(false);
  const actionData = useActionData<any>();
  const { id: inputId, inputRef } = useFormController();

  function inputInError() {
    if (typeof isError === "undefined") {
      return !!actionData?.fieldErrors?.[name];
    }
    return isError;
  }

  const borderError = isFocused
    ? `2px solid var(--${colorScheme}-600)`
    : inputInError()
    ? "2px solid var(--red-600)"
    : undefined;

  const colorIcon = isFocused
    ? `var(--${colorScheme}-600)`
    : inputInError()
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
        <Icon
          style={{
            minWidth: iconSize,
            maxWidth: iconSize,
            minHeight: iconSize,
            maxHeight: iconSize,
          }}
          strokeWidth={iconStrokeWidth}
          color={colorIcon}
        />
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
