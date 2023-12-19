import { useActionData } from "@remix-run/react";
import { useState, type KeyboardEvent } from "react";

import { useArkyn } from "../../hooks";
import { useFormController } from "../Form/FormController";
import { currencyFormatter } from "../../utils";

import * as styles from "./styles.css";
import type { CurrencyInputProps } from "./types";

export function CurrencyInput(props: CurrencyInputProps) {
  const { input } = useArkyn();
  const { onKeyDown, valueDisplay } = currencyFormatter;
  const defaultProps = { ...input, ...props };

  const {
    colorScheme,
    bg,
    iconSize,
    readOnly,
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
    value: forcedValue,
    onChange,
    defaultValue,
    iconStrokeWidth,
    name,
    max = 100000000,
    children,
    style,
    id,
    ...rest
  } = defaultProps;

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue || 0);

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

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (readOnly || disabled) return null;
    onKeyDown(event, value, setValue, max);
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
        onKeyDown={handleKeyDown}
        value={forcedValue || valueDisplay(value)}
        id={id || inputId}
        className={styles.container({ fontSize, fontWeight })}
        {...rest}
      />
    </div>
  );
}
