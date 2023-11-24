import { type FC, useState } from "react";
import SunEditor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

export function RichText(args: Partial<SunEditorReactProps>) {
  const [value, setValue] = useState("");

  return (
    <SunEditor
      setContents={value}
      onChange={setValue}
      setOptions={{
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
      }}
      {...args}
    />
  );
}
