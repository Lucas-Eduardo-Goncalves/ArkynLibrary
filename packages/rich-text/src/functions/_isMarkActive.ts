import { type BaseEditor, Editor } from "slate";
import { ReactEditor } from "slate-react";

export function isMarkActive(editor: BaseEditor & ReactEditor, format: string) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}
