import { type BaseEditor, Editor, Element } from "slate";
import type { ReactEditor } from "slate-react";

type IsBlockActiveProps = {
  editor: BaseEditor & ReactEditor;
  format: string;
  blockType?: "align" | "type";
};

export function isBlockActive(args: IsBlockActiveProps) {
  const { editor, format, blockType = "type" } = args;
  const { selection } = editor;

  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format,
    })
  );

  return !!match;
}
