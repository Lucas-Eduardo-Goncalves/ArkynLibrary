import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import SunEditor from "suneditor-react";
export function RichText(args) {
    const { name, ...rest } = args;
    const [value, setValue] = useState("");
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "hidden", value: value, name: name }), _jsx(SunEditor, { setContents: value, onChange: setValue, setOptions: {
                    buttonList: [
                        ["undo", "redo"],
                        ["formatBlock"],
                        [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                        ],
                        ["fontColor", "hiliteColor"],
                        ["align", "list"],
                        ["outdent", "indent"],
                        ["table", "horizontalRule", "link", "image", "video"],
                    ],
                    defaultTag: "div",
                    minHeight: "300px",
                    showPathLabel: false,
                }, ...rest })] }));
}
