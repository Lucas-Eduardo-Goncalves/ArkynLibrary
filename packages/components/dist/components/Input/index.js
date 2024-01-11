import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import * as styles from "./styles.css";
import { useState } from "react";
import { useFormController } from "../Form/FormController";
import { useArkyn } from "../../hooks";
export function Input(props) {
    const { input } = useArkyn();
    const defaultProps = { ...input, ...props };
    const { colorScheme, bg, iconSize, iconColor, icon: Icon, fontSize, fontWeight, radii, size, space, spacing, variant, iconStrokeWidth, name, children, style, id, ...rest } = defaultProps;
    const [isFocused, setIsFocused] = useState(false);
    const { id: inputId, inputRef } = useFormController();
    const actionData = useActionData();
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
        if (inputRef?.current)
            inputRef.current.focus();
    }
    return (_jsxs("div", { onClick: handleFocus, className: styles.group({ radii, size, space, spacing, variant }), style: {
            borderColor: borderError ? "transparent" : undefined,
            outline: borderError,
            background: bg || undefined,
            ...style,
        }, children: [Icon && (_jsx(Icon, { style: {
                    minWidth: iconSize,
                    maxWidth: iconSize,
                    minHeight: iconSize,
                    maxHeight: iconSize,
                }, strokeWidth: iconStrokeWidth, color: colorIcon })), _jsx("input", { ref: inputRef, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), name: name, id: id || inputId, className: styles.container({ fontSize, fontWeight }), ...rest })] }));
}
