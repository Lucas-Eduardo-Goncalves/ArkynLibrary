import type { LinksFunction } from "@remix-run/node";
import { RichText } from "arkyn_rich_text";
import richTextCSS from "../styles.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: richTextCSS },
];

export default function () {
  return (
    <RichText
      setDefaultStyle="font-family: Roboto; font-size: 16px;"
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
    />
  );
}
