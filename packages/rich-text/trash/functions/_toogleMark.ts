import { type BaseEditor, Editor } from "slate";
import type { ReactEditor } from "slate-react";

import { isMarkActive } from "./_isMarkActive";

export function toggleMark(editor: BaseEditor & ReactEditor, format: string) {
  const isActive = isMarkActive(editor, format);

  switch (isActive) {
    case true:
      Editor.removeMark(editor, format);
      return;
    case false:
      Editor.addMark(editor, format, true);
      return;
  }
}
