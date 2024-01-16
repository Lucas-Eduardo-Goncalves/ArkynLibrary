import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import katex from "katex";
import SunEditor from "suneditor-react";
export function RichText(args) {
    const { name, defaultValue, ...rest } = args;
    const [value, setValue] = useState(defaultValue || "");
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "hidden", value: value, name: name }), _jsx(SunEditor, { setContents: value, onChange: setValue, setOptions: {
                    katex: katex,
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
                        ["table", "horizontalRule", "link", "image", "video", "math"],
                    ],
                    defaultTag: "div",
                    minHeight: "300px",
                    showPathLabel: false,
                }, ...rest })] }));
}
