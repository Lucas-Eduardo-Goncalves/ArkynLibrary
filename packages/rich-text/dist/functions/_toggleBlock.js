import { Element, Transforms, Editor } from "slate";
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "../configs";
import { isBlockActive } from "./_isBlockActive";
export function toggleBlock(editor, format) {
    const isList = LIST_TYPES.includes(format);
    const isActive = isBlockActive({
        editor,
        format,
        blockType: TEXT_ALIGN_TYPES.includes(format) ? "align" : "type",
    });
    Transforms.unwrapNodes(editor, {
        split: true,
        match: (n) => !Editor.isEditor(n) &&
            Element.isElement(n) &&
            LIST_TYPES.includes(n["type"]) &&
            !TEXT_ALIGN_TYPES.includes(format),
    });
    let newProperties;
    switch (TEXT_ALIGN_TYPES.includes(format)) {
        case true:
            newProperties = { align: isActive ? undefined : format };
            break;
        case false:
            newProperties = {
                type: isActive ? "paragraph" : isList ? "list-item" : format,
            };
            break;
    }
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
}
