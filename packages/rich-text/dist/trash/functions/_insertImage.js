import { Transforms } from "slate";
export function insertImage(editor, url) {
    const text = { text: "image" };
    const image = { text, type: "image", url, children: [text] };
    Transforms.insertNodes(editor, image);
}
