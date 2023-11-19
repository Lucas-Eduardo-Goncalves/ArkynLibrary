import { useActionData } from "@remix-run/react";
import { Check } from "lucide-react";
import { MouseEvent, useState } from "react";

import * as styles from "./styles.css";
import { CheckboxProps } from "./types";
import { useFormController } from "../Form/FormController";
import { useArkyn } from "../../hooks";

export function Checkbox(props: CheckboxProps) {
  const { checkbox } = useArkyn();
  const defaultProps = { ...checkbox, ...props };

  const {
    space,
    radii,
    variant,
    strokeWidth,
    colorScheme,
    size,
    onCheck,
    checked: forceChecked,
    defaultChecked,
    name,
    style,
    ...rest
  } = defaultProps;

  const { checkboxRef } = useFormController();
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  const actionData = useActionData<any>();
  const showBorderError = actionData?.fieldErrors?.[name];

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setIsChecked((old) => !old);
    if (onCheck) onCheck(e);
  }

  const checked =
    typeof forceChecked !== "undefined" ? forceChecked : isChecked;

  return (
    <>
      <input
        ref={checkboxRef}
        type="hidden"
        name={name}
        value={String(checked)}
      />

      <button
        name={name}
        type="button"
        onClick={handleClick}
        className={styles.container({
          space,
          radii,
          variant,
          colorScheme,
          isChecked: checked,
        })}
        style={{
          borderColor: showBorderError ? "var(--red-600)" : undefined,
          ...style,
        }}
        {...rest}
      >
        <Check
          style={{
            minHeight: `var(--font-size-${size})`,
            maxHeight: `var(--font-size-${size})`,
            minWidth: `var(--font-size-${size})`,
            maxWidth: `var(--font-size-${size})`,
          }}
          strokeWidth={strokeWidth}
          color={
            checked
              ? variant === "default"
                ? "var(--white)"
                : `var(--${colorScheme}-600)`
              : "transparent"
          }
        />
      </button>
    </>
  );
}
