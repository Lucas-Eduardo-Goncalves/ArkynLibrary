import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import SunEditor from "suneditor-react";
const defaultFonts = [
    "Arial",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana",
];
export function RichText() {
    const [value, setValue] = React.useState("");
    const sortedFontOptions = [
        "Logical",
        "Salesforce Sans",
        "Garamond",
        "Sans-Serif",
        "Serif",
        "Times New Roman",
        "Helvetica",
        ...defaultFonts,
    ].sort();
    return (_jsx(SunEditor, { setContents: value, onChange: setValue, setOptions: {
            buttonList: [
                ["undo", "redo"],
                ["font", "fontSize"],
                ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                ["fontColor", "hiliteColor"],
                ["align", "list", "lineHeight"],
                ["outdent", "indent"],
                ["table", "horizontalRule", "link", "image", "video"],
                ["preview", "print"],
                ["removeFormat"],
            ],
            defaultTag: "div",
            minHeight: "300px",
            showPathLabel: false,
            font: sortedFontOptions,
        } }));
}
