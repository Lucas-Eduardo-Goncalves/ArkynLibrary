import type { LinksFunction } from "@remix-run/node";

import resetCSS from "./styles/reset.css";
import variablesCSS from "./styles/variables.css";
import arkynCSS from "arkyn_components/dist/style.css";

const fontURL =
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap";
const fontMonoURL =
  "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap";

const links: LinksFunction = () => [
  // FONTS
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  { rel: "stylesheet", href: fontURL },
  { rel: "stylesheet", href: fontMonoURL },
  // LIB STYLES
  { rel: "stylesheet", href: arkynCSS },
  // RESET STYLES
  { rel: "stylesheet", href: resetCSS },
  { rel: "stylesheet", href: variablesCSS },
];

export { links };
