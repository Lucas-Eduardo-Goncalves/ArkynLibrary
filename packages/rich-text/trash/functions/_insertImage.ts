import { BaseEditor, Transforms } from "slate";
import { ReactEditor } from "slate-react";

export function insertImage(editor: BaseEditor & ReactEditor, url: string) {
  const text = { text: "image" };
  const image = { text, type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
}
