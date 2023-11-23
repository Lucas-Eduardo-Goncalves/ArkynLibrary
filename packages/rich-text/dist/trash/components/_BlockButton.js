import { jsx as _jsx } from "react/jsx-runtime";
import { useSlate } from "slate-react";
import { isBlockActive, toggleBlock } from "../functions";
import { TEXT_ALIGN_TYPES } from "../configs";
export function BlockButton(args) {
    const { format, icon: Icon } = args;
    const editor = useSlate();
    const isActive = isBlockActive({
        editor,
        format,
        blockType: TEXT_ALIGN_TYPES.includes(format) ? "align" : "type",
    });
    const activeClass = isActive ? "is_active" : "not_active";
    function handleClick(event) {
        event.preventDefault();
        toggleBlock(editor, format);
    }
    return (_jsx("button", { className: `rich_text_header_button ${activeClass}`, onClick: handleClick, children: _jsx(Icon, { size: 16 }) }));
}
