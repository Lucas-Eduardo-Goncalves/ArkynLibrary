import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import SunEditor from "suneditor-react";
export function RichText(args) {
    const [value, setValue] = useState("");
    return (_jsx(SunEditor, { setContents: value, onChange: setValue, setOptions: {
            buttonList: [
                ["undo", "redo"],
                ["formatBlock"],
                ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                ["fontColor", "hiliteColor"],
                ["align", "list"],
                ["outdent", "indent"],
                ["table", "horizontalRule", "link", "image", "video"],
                ["removeFormat"],
            ],
            defaultTag: "div",
            minHeight: "300px",
            showPathLabel: false,
        }, ...args }));
}
