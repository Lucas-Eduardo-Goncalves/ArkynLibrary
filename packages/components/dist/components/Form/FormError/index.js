import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { motion } from "framer-motion";
import { useFormController } from "../FormController";
import { container } from "./styles.css";
export function FormError(props) {
    const { children, font = "default", fontSize = "sm", fontWeight = "bold", dontShowError = false, color = "var(--red-600)", style, ...rest } = props;
    const { checkboxRef, inputRef, textareaRef } = useFormController();
    function getName() {
        if (checkboxRef?.current)
            return checkboxRef.current.name;
        if (inputRef?.current)
            return inputRef.current.name;
        if (textareaRef?.current)
            return textareaRef.current.name;
        return null;
    }
    const actionData = useActionData();
    const errorValue = actionData?.fieldErrors?.[getName()];
    if (children) {
        return (_jsx(motion.strong, { transition: { duration: 0.1, ease: "easeIn" }, initial: { opacity: 0, transform: "translateY(-5px)", height: "0px" }, animate: { opacity: 1, transform: "translateY(0)", height: "unset" }, exit: { opacity: 0, transform: "translateY(-5px)", height: "0px" }, className: container({ font, fontSize, fontWeight }), style: { color, ...style }, ...rest, children: children }));
    }
    if (errorValue && !dontShowError) {
        return (_jsx(motion.strong, { transition: { duration: 0.1, ease: "easeIn" }, initial: { opacity: 0, transform: "translateY(-5px)", height: "0px" }, animate: { opacity: 1, transform: "translateY(0)", height: "unset" }, exit: { opacity: 0, transform: "translateY(-5px)", height: "0px" }, className: container({ font, fontSize, fontWeight }), style: { color, ...style }, ...rest, children: errorValue }));
    }
    return _jsx(_Fragment, {});
}
