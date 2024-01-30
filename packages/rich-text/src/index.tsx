import { useState } from "react";
import katex from "katex";
import SunEditor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

import "katex/dist/katex.css";
type RichTextProps = Partial<SunEditorReactProps> & {};

export function RichText(args: RichTextProps) {
  const { name, defaultValue, ...rest } = args;
  const [value, setValue] = useState(defaultValue || "");

  return (
    <>
      <input type="hidden" value={value} name={name} />

      <SunEditor
        setContents={value}
        onChange={setValue}
        setOptions={{
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
        }}
        {...rest}
      />
    </>
  );
}
