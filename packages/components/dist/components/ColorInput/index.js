import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { SketchPicker } from "react-color";
import { useState } from "react";
import * as styles from "./styles.css";
import { useFormController } from "../Form/FormController";
import { Popover } from "../Popover";
import { useArkyn } from "../../hooks";
export function ColorInput(props) {
    const { input } = useArkyn();
    const defaultProps = { ...input, ...props };
    const { id, fontSize, fontWeight, spacing, radii, size, space, variant, colorScheme, icon: Icon, iconSize, iconStrokeWidth, iconColor, name, style, bg, value: forcedValue, defaultValue, readOnly, ...rest } = defaultProps;
    const [value, setValue] = useState(defaultValue || "");
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
    return (_jsx(Popover, { button: _jsxs("div", { onClick: handleFocus, className: styles.group({ radii, size, space, spacing, variant }), style: {
                borderColor: borderError ? "transparent" : undefined,
                outline: borderError,
                background: bg || undefined,
                ...style,
            }, children: [Icon && (_jsx(Icon, { size: iconSize, strokeWidth: iconStrokeWidth, color: colorIcon })), _jsx("input", { ref: inputRef, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), name: name, value: forcedValue || value, readOnly: readOnly, id: id || inputId, className: styles.container({ fontSize, fontWeight }), ...rest })] }), children: _jsx(SketchPicker, { color: forcedValue || value, onChange: (e) => setValue(e.hex), styles: {
                default: {
                    picker: {
                        background: "var(--white)",
                        borderRadius: 8,
                    },
                    controls: {
                        color: "var(--normal-color)",
                        fontFamily: "var(--font-default)",
                    },
                },
            } }) }));
}
