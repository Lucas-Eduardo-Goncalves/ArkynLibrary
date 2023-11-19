import { useActionData } from "@remix-run/react";

import type { MultilineProps } from "./types";
import * as styles from "./styles.css";
import { useState } from "react";
import { useFormController } from "../Form/FormController";
import { useArkyn } from "../../hooks";

export function Multiline(props: MultilineProps) {
  const { multiline } = useArkyn();
  const defaultProps = { ...multiline, ...props };

  const {
    id,
    fontSize,
    fontWeight,
    spacing,
    radii,
    space,
    variant,
    colorScheme,
    icon: Icon,
    iconSize,
    iconStrokeWidth,
    iconColor,
    name,
    style,
    bg,
    ...rest
  } = defaultProps;

  const [isFocused, setIsFocused] = useState(false);

  const { id: inputId, textareaRef } = useFormController();

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
    if (textareaRef?.current) textareaRef.current.focus();
  }

  return (
    <div
      onClick={handleFocus}
      className={styles.group({ radii, space, spacing, variant })}
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

      <textarea
        ref={textareaRef}
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
