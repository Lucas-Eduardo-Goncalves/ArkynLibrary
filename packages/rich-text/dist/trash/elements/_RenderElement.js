import { jsx as _jsx } from "react/jsx-runtime";
export function RenderElement(args) {
    const { attributes, children, element } = args;
    switch (element.type) {
        case "image":
            return (_jsx("img", { src: element.url, alt: "image=" + element.url, ...attributes }));
        case "block-quote":
            return _jsx("blockquote", { ...attributes, children: children });
        case "bulleted-list":
            return _jsx("ul", { ...attributes, children: children });
        case "heading-one":
            return _jsx("h1", { ...attributes, children: children });
        case "heading-two":
            return _jsx("h2", { ...attributes, children: children });
        case "list-item":
            return _jsx("li", { ...attributes, children: children });
        case "numbered-list":
            return _jsx("ol", { ...attributes, children: children });
        default:
            return _jsx("p", { ...attributes, children: children });
    }
}
