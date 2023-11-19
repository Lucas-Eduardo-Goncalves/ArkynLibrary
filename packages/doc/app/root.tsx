import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ArkynProvider } from "@arkyn/components";

import arkynCSS from "@arkyn/components/dist/style.css";
import resetCSS from "./styles/reset.css";
import variablesCSS from "./styles/variables.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: arkynCSS },
  { rel: "stylesheet", href: resetCSS },
  { rel: "stylesheet", href: variablesCSS },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ArkynProvider>
          <Outlet />
        </ArkynProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
