import type { LinksFunction } from "@remix-run/node";
import { RichText } from "arkyn_rich_text";
import css from "arkyn_rich_text/dist/main.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: css }];

export default function () {
  return <RichText />;
}
