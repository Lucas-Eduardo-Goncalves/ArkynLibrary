import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Icons from "lucide-react";
import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact, } from "slate-react";
import { BlockButton, MarkButton } from "./components";
import { INITIAL_VALUE } from "./configs";
import { RenderElement, RenderLeaf } from "./elements";
export function RichText() {
    const renderElement = useCallback((props) => _jsx(RenderElement, { ...props }), []);
    const renderLeaf = useCallback((props) => _jsx(RenderLeaf, { ...props }), []);
    const [editor] = useState(() => withReact(createEditor()));
    return (_jsx("div", { className: "rich_text_container", children: _jsxs(Slate, { editor: editor, initialValue: INITIAL_VALUE, children: [_jsxs("header", { className: "rich_text_header", children: [_jsx(MarkButton, { format: "bold", icon: Icons.Bold }), _jsx(MarkButton, { format: "italic", icon: Icons.Italic }), _jsx(MarkButton, { format: "underline", icon: Icons.Underline }), _jsx(MarkButton, { format: "code", icon: Icons.Code }), _jsx(BlockButton, { format: "heading-one", icon: Icons.Heading1 }), _jsx(BlockButton, { format: "heading-two", icon: Icons.Heading2 }), _jsx(BlockButton, { format: "block-quote", icon: Icons.Quote }), _jsx(BlockButton, { format: "numbered-list", icon: Icons.ListOrdered }), _jsx(BlockButton, { format: "bulleted-list", icon: Icons.List }), _jsx(BlockButton, { format: "left", icon: Icons.AlignLeft }), _jsx(BlockButton, { format: "center", icon: Icons.AlignCenter }), _jsx(BlockButton, { format: "right", icon: Icons.AlignRight }), _jsx(BlockButton, { format: "justify", icon: Icons.AlignJustify })] }), _jsx(Editable, { className: "rich_text_textarea", renderElement: renderElement, renderLeaf: renderLeaf, placeholder: "Enter some rich text\u2026" })] }) }));
}
