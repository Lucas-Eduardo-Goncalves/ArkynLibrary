import { Editor, Element } from "slate";
export function isBlockActive(args) {
    const { editor, format, blockType = "type" } = args;
    const { selection } = editor;
    if (!selection)
        return false;
    const [match] = Array.from(Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format,
    }));
    return !!match;
}
