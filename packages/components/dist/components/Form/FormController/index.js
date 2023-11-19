import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useId, useRef, useState } from "react";
import { container } from "./styles.css";
const FormControllerContext = createContext({});
export function FormController(props) {
    const { direction = "column", space = "unset", spacing = "xxs", ...rest } = props;
    const [isChecked, setIsChecked] = useState(false);
    const id = useId();
    const checkboxRef = useRef(null);
    const inputRef = useRef(null);
    const textareaRef = useRef(null);
    const inputMaskRef = useRef(null);
    return (_jsx(FormControllerContext.Provider, { value: {
            id,
            isChecked,
            inputMaskRef,
            setIsChecked,
            checkboxRef,
            inputRef,
            textareaRef,
        }, children: _jsx("div", { className: container({ direction, space, spacing }), ...rest }) }));
}
export function useFormController() {
    const context = useContext(FormControllerContext);
    return context;
}
