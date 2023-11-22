import type { LinksFunction } from "@remix-run/node";
import { RichText } from "arkyn_rich_text";
import richTextCSS from "arkyn_rich_text/dist/main.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: richTextCSS },
];

export default function () {
  return <RichText />;
}
