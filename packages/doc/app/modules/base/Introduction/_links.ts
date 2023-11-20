import type { LinksFunction } from "@remix-run/node";

import containerCSS from "./styles/container.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: containerCSS }];

export { links };
