import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { Check } from "lucide-react";
import { useState } from "react";
import * as styles from "./styles.css";
import { useFormController } from "../Form/FormController";
import { useArkyn } from "../../hooks";
export function Checkbox(props) {
    const { checkbox } = useArkyn();
    const defaultProps = { ...checkbox, ...props };
    const { space, radii, variant, strokeWidth, colorScheme, size, onCheck, checked: forceChecked, defaultChecked, name, style, ...rest } = defaultProps;
    const { checkboxRef } = useFormController();
    const [isChecked, setIsChecked] = useState(defaultChecked || false);
    const actionData = useActionData();
    const showBorderError = actionData?.fieldErrors?.[name];
    function handleClick(e) {
        setIsChecked((old) => !old);
        if (onCheck)
            onCheck(e);
    }
    const checked = typeof forceChecked !== "undefined" ? forceChecked : isChecked;
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: checkboxRef, type: "hidden", name: name, value: String(checked) }), _jsx("button", { name: name, type: "button", onClick: handleClick, className: styles.container({
                    space,
                    radii,
                    variant,
                    colorScheme,
                    isChecked: checked,
                }), style: {
                    borderColor: showBorderError ? "var(--red-600)" : undefined,
                    ...style,
                }, ...rest, children: _jsx(Check, { style: {
                        minHeight: `var(--font-size-${size})`,
                        maxHeight: `var(--font-size-${size})`,
                        minWidth: `var(--font-size-${size})`,
                        maxWidth: `var(--font-size-${size})`,
                    }, strokeWidth: strokeWidth, color: checked
                        ? variant === "default"
                            ? "var(--white)"
                            : `var(--${colorScheme}-600)`
                        : "transparent" }) })] }));
}
