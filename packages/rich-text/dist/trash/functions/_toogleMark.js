import { Editor } from "slate";
import { isMarkActive } from "./_isMarkActive";
export function toggleMark(editor, format) {
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
