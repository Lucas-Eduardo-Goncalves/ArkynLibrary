import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import { Text } from "../Text";
import { useFormController } from "../Form/FormController";
import * as styles from "./styles.css";
export function Select(props) {
    const { id, containerStyle, optionsContainerStyle, isSearchable = false, fontSize = "md", fontWeight = "regular", spacing = "sm", radii = "md", size = "md", space = "sm", variant = "default", colorScheme = "indigo", icon: Icon, options = [], value = "", defaultValue = "", placeholder, iconSize = 20, iconStrokeWidth = 2, iconColor = "var(--slate-400)", name, style, onSelected, bg, onSearch, ...rest } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [selectValue, setSelectValue] = useState(String(defaultValue || ""));
    const [searchValue, setSearchValue] = useState("");
    const { id: inputId, inputRef } = useFormController();
    const ref = useRef(null);
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
        if (ref?.current) {
            if (!isFocused)
                ref.current.focus();
            if (isFocused)
                ref.current.blur();
        }
    }
    function itemExists(value) {
        if (!searchValue)
            return true;
        const alreadyExists = String(value)
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        if (alreadyExists)
            return true;
        return false;
    }
    return (_jsxs("div", { style: {
            display: "flex",
            position: "relative",
            flex: 1,
            ...containerStyle,
        }, children: [_jsxs("div", { className: styles.group({ radii, size, space, spacing, variant }), style: {
                    borderColor: borderError ? "transparent" : undefined,
                    outline: borderError,
                    background: bg || undefined,
                    ...style,
                }, children: [Icon && (_jsx(Icon, { size: iconSize, strokeWidth: iconStrokeWidth, color: colorIcon })), _jsx("input", { ref: ref, onFocus: () => setIsFocused(true), readOnly: !isSearchable, onBlur: () => {
                            setSearchValue("");
                            onSearch && onSearch("");
                            setTimeout(() => {
                                setIsFocused(false);
                            }, 250);
                        }, onChange: (e) => {
                            setSearchValue(e.target.value);
                            onSearch && onSearch(e.target.value);
                        }, value: isFocused
                            ? searchValue || ""
                            : value === ""
                                ? options.find((option) => String(option.value) === selectValue)
                                    ?.label || ""
                                : options.find((option) => String(option.value) === value)
                                    ?.label || "", placeholder: isFocused
                            ? options.find((option) => String(option.value) === (String(value) || selectValue))?.label || placeholder
                            : searchValue || placeholder, id: id || inputId, className: styles.container({ fontSize, fontWeight }), ...rest }), _jsx("input", { ref: inputRef, type: "hidden", name: name, value: value !== "" ? String(value) : selectValue }), _jsx(motion.div, { onClick: handleFocus, style: { display: "flex", alignItems: "center" }, initial: { rotate: 0 }, animate: { rotate: isFocused ? 180 : 0 }, children: _jsx(ChevronUp, { style: { minWidth: "16px", minHeight: "16px" }, color: "var(--normal-color)" }) })] }), isFocused && (_jsx("ul", { style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "calc(100% + 2px)",
                    left: 0,
                    maxHeight: "400px",
                    overflow: "auto",
                    zIndex: 4,
                    right: 0,
                    background: "var(--white)",
                    height: "max-content",
                    border: "1px solid var(--slate-300)",
                    borderRadius: "var(--radii-md)",
                    boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.2)",
                    ...optionsContainerStyle,
                }, children: options.map((option, index) => {
                    if (!itemExists(option.label))
                        return _jsx(_Fragment, {});
                    return (_jsx("div", { className: styles.option, style: {
                            background: String(option.value) ===
                                (value !== "" ? String(value) : selectValue)
                                ? "var(--slate-50)"
                                : undefined,
                            borderBottom: index + 1 === options.length
                                ? "none"
                                : "1px solid var(--slate-300)",
                        }, onClick: () => {
                            setSelectValue && setSelectValue(String(option?.value));
                            onSelected && onSelected(String(option?.value));
                        }, children: _jsx(Text, { as: "p", children: option.label }) }, option.label + option.value + index));
                }) }))] }));
}
