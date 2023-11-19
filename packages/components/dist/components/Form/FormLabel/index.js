import { jsx as _jsx } from "react/jsx-runtime";
import { checkboxStyle } from "./styles.css";
import { useFormController } from "../FormController";
export function FormLabel(props) {
    const { setIsChecked, id } = useFormController();
    const { font, style, htmlFor, color, fontSize, fontWeight, onClick, ...rest } = props;
    function handleOnClick(e) {
        setIsChecked((old) => !old);
        onClick(e);
    }
    return (_jsx("label", { htmlFor: htmlFor || id, onClick: handleOnClick, className: checkboxStyle({
            font,
            fontSize,
            fontWeight,
        }), style: { color, ...style }, ...rest }));
}
