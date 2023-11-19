import type { LinksFunction } from "@remix-run/node";

import containerCSS from "./styles/container.css";

import layoutHeaderCSS from "./components/LayoutHeader/styles.css";
import layoutNavigationCSS from "./components/LayoutNavigation/styles.css";

const links: LinksFunction = () => [
  // BASE
  { rel: "stylesheet", href: containerCSS },
  // COMPONENTS
  { rel: "stylesheet", href: layoutHeaderCSS },
  { rel: "stylesheet", href: layoutNavigationCSS },
];

export { links };
