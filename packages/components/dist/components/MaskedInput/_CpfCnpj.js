import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { useState } from "react";
import { useFormController } from "../Form/FormController";
import * as styles from "./styles.css";
function clear(value) {
    return value && value.replace(/[^0-9]/g, "");
}
function applyMask(value, mask) {
    let result = "";
    let inc = 0;
    Array.from(value).forEach((letter, index) => {
        if (!mask[index + inc].match(/[0-9]/)) {
            result += mask[index + inc];
            inc++;
        }
        result += letter;
    });
    return result;
}
function getMask(value) {
    return value.length > 11 ? "CNPJ" : "CPF";
}
const TYPES = {
    CPF: "999.999.999-999",
    CNPJ: "99.999.999/9999-99",
};
const MAX_LENGTH = clear(TYPES.CNPJ).length;
export function CpfCnpj(props) {
    const { id, fontSize = "md", fontWeight = "regular", spacing = "sm", radii = "md", size = "md", space = "sm", variant = "default", colorScheme = "indigo", icon: Icon, iconSize = 20, iconStrokeWidth = 2, iconColor = "var(--slate-400)", name, style, value: inputValue = "", bg, onChange = () => { }, type, ...rest } = props;
    let value = clear(inputValue);
    if (value) {
        value = applyMask(value, TYPES[getMask(value)]);
    }
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
    function onLocalChange(ev) {
        let value = clear(ev.target.value);
        const mask = getMask(value);
        let nextLength = value.length;
        if (nextLength > MAX_LENGTH)
            return;
        value = applyMask(value, TYPES[mask]);
        ev.target.value = value;
        onChange(ev);
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
                }, strokeWidth: iconStrokeWidth, color: colorIcon })), _jsx("input", { value: value, onChange: onLocalChange, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), name: name, id: id || inputId, className: styles.container({ fontSize, fontWeight }), ref: inputRef, ...rest })] }));
}
