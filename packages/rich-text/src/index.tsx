import { type FC, useState } from "react";
import SunEditor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

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
        }}
        {...rest}
      />
    </>
  );
}
