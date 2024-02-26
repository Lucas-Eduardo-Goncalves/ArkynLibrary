import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import { Text } from "../Text";
import { useFormController } from "../Form/FormController";
import * as styles from "./styles.css";
import { Checkbox, Icons } from "../..";
function Option({ handleChange, index, option, isPresent, options, optionsContainerStyle, }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = options.filter((opt) => opt.parent_id === option.value).length > 0;
    const background = isPresent(option.value) ? "var(--slate-50)" : undefined;
    return (_jsxs("div", { children: [_jsxs("div", { className: styles.option, style: { background }, children: [_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [hasChildren && (_jsxs(_Fragment, { children: [isOpen && (_jsx(Icons.ChevronDown, { color: "var(--slate-900)", onClick: () => setIsOpen(false), size: 16 })), !isOpen && (_jsx(Icons.ChevronRight, { color: "var(--slate-900)", onClick: () => setIsOpen(true), size: 16 }))] })), _jsx(Checkbox, { style: { marginLeft: !hasChildren ? "1.5rem" : "0" }, size: "xs", checked: isPresent(option.value), onCheck: () => handleChange(option.value) })] }), _jsx(Text, { as: "p", style: { paddingLeft: "0.5rem" }, children: option.label })] }, option.label + option.value + index + "sub_" + option.parent_id), _jsx("div", { style: { paddingLeft: "1rem" }, children: hasChildren && isOpen && (_jsx("ul", { style: {
                        display: "flex",
                        flexDirection: "column",
                        ...optionsContainerStyle,
                    }, children: options
                        .filter((opt) => opt.parent_id === option.value)
                        .map((option, index) => (_jsx(Option, { index: index, handleChange: handleChange, option: option, isPresent: isPresent, options: options, optionsContainerStyle: optionsContainerStyle }, option.label + option.value + index))) })) })] }));
}
export function CascadeSelect(props) {
    const { id, containerStyle, optionsContainerStyle, isSearchable = false, fontSize = "md", fontWeight = "regular", spacing = "sm", radii = "md", size = "md", space = "sm", variant = "default", colorScheme = "indigo", icon: Icon, options = [], value = [], defaultValue = [], placeholder, iconSize = 20, iconStrokeWidth = 2, iconColor = "var(--slate-400)", name, style, onSelected, bg, onSearch, ...rest } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [selectValue, setSelectValue] = useState(() => {
        const values = new Set();
        if (value.length > 0) {
            value?.forEach((a) => values.add(String(a)));
        }
        if (defaultValue.length > 0) {
            defaultValue?.forEach((a) => values.add(String(a)));
        }
        return Array.from(values);
    });
    function isPresent(e) {
        const alreadyExists = selectValue.includes(String(e));
        return alreadyExists;
    }
    function handleChange(e) {
        const alreadyExists = isPresent(e);
        if (alreadyExists) {
            const clear = selectValue.filter((all) => all !== String(e));
            setSelectValue && setSelectValue(clear);
            onSelected && onSelected(clear);
        }
        else {
            setSelectValue && setSelectValue([...selectValue, String(e)]);
            onSelected && onSelected([...selectValue, String(e)]);
        }
    }
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
        if (!isFocused) {
            setIsFocused(true);
        }
        if (isFocused) {
            setIsFocused(false);
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
    return (_jsxs(_Fragment, { children: [isFocused && (_jsx("div", { className: styles.overlay, onClick: () => setIsFocused(false) })), _jsxs("div", { style: {
                    display: "flex",
                    position: "relative",
                    flex: 1,
                    zIndex: 4,
                    ...containerStyle,
                }, onClick: () => setIsFocused(true), children: [_jsxs("div", { className: styles.group({ radii, space, size, spacing, variant }), style: {
                            borderColor: borderError ? "transparent" : undefined,
                            outline: borderError,
                            background: bg || undefined,
                            ...style,
                        }, children: [Icon && (_jsx(Icon, { size: iconSize, strokeWidth: iconStrokeWidth, color: colorIcon, style: { minWidth: iconSize, minHeight: iconSize } })), _jsx("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: "0.25rem",
                                    flex: 1,
                                }, children: selectValue.map((arg) => (_jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        background: "var(--slate-100)",
                                        borderRadius: "4px",
                                    }, children: [_jsx("p", { style: { padding: "0.25rem 0.5rem" }, children: options.find((a) => String(a.value) === String(arg))
                                                ?.label || arg }), _jsx("button", { onClick: () => handleChange(arg), style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: "0.25rem",
                                            }, children: _jsx(Icons.X, { size: 16 }) })] }))) }), _jsx("input", { ref: inputRef, type: "hidden", name: name, value: selectValue.length > 0 ? JSON.stringify(selectValue) : undefined }), _jsx(motion.div, { onClick: handleFocus, style: { display: "flex", alignItems: "center" }, initial: { rotate: 0 }, animate: { rotate: isFocused ? 180 : 0 }, children: _jsx(ChevronUp, { style: { minWidth: "16px", minHeight: "16px" }, color: "var(--normal-color)" }) })] }), isFocused && (_jsx("div", { style: {
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
                        }, children: options
                            .filter((opt) => opt.parent_id === 0)
                            .map((option, index) => (_jsx(Option, { index: index, handleChange: handleChange, option: option, isPresent: isPresent, options: options, optionsContainerStyle: optionsContainerStyle }, option.label + option.value + index))) }))] })] }));
}
