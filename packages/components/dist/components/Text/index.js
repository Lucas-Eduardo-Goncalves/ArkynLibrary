import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "@remix-run/react";
import { textStyle } from "./styles.css";
const tag = {
    link: (props) => _jsx(Link, { ...props }),
    span: (props) => _jsx("span", { ...props }),
    small: (props) => _jsx("small", { ...props }),
    strong: (props) => _jsx("strong", { ...props }),
    p: (props) => _jsx("p", { ...props }),
    h1: (props) => _jsx("h1", { ...props }),
    h2: (props) => _jsx("h2", { ...props }),
    h3: (props) => _jsx("h3", { ...props }),
    h4: (props) => _jsx("h4", { ...props }),
    h5: (props) => _jsx("h5", { ...props }),
    h6: (props) => _jsx("h6", { ...props }),
};
export function Text({ as, font, style, color, fontSize, fontWeight, lineHeight, stayCenter = false, stayInline = false, ...rest }) {
    const Tag = tag[as];
    const dontHeading = as === "link" || as === "p" || as === "small" || as === "span";
    return (_jsx(Tag, { className: textStyle({
            font,
            fontSize,
            fontWeight,
            lineHeight,
            heading: !dontHeading,
        }), style: {
            color,
            display: stayInline ? "inline" : "block",
            textAlign: stayCenter ? "center" : "unset",
            ...style,
        }, ...rest }));
}
