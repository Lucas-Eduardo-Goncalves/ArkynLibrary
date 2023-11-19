import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useArkyn } from "../../hooks";
import { Spinner } from "../Spinner";
import { container } from "./styles.css";
export function Button(props) {
    const { button } = useArkyn();
    const defaultProps = { ...button, ...props };
    const { colorScheme, bg, iconColorScheme, iconSize, fontSize, fontWeight, radii, size, space, spacing, variant, isLoading, disabled, children, style, ...rest } = defaultProps;
    return (_jsxs("button", { className: container({
            colorScheme,
            fontSize,
            fontWeight,
            radii,
            size,
            space,
            spacing,
            variant,
        }), style: { background: bg, ...style }, disabled: isLoading || disabled, ...rest, children: [isLoading && _jsx(Spinner, { size: iconSize, colorScheme: iconColorScheme }), !isLoading && children] }));
}
