import type { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
  { title: "Arkyn | Introdução" },
  { name: "description", content: "Welcome to Arkyn!" },
];

export { meta };
