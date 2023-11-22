import { jsx as _jsx } from "react/jsx-runtime";
import { isMarkActive, toggleMark } from "../functions";
import { useSlate } from "slate-react";
export function MarkButton(args) {
    const { format, icon: Icon } = args;
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);
    const activeClass = isActive ? "is_active" : "not_active";
    function handleClick(event) {
        event.preventDefault();
        toggleMark(editor, format);
    }
    return (_jsx("button", { className: `rich_text_header_button ${activeClass}`, onClick: handleClick, children: _jsx(Icon, { size: 16 }) }));
}
