import { Link } from "@remix-run/react";
import { Icons } from "arkyn_components";

export function LayoutHeader() {
  return (
    <header className="layout_header">
      <h1>Arkyn</h1>

      <div>
        <ul className="layout_header_links">
          <Link to="#" title="Leia nossos termos">
            Sobre
          </Link>
          <Link to="#" title="Entre em contato">
            Contato
          </Link>
        </ul>

        <span className="divider" />

        <ul className="layout_header_social">
          <Link
            target="_blank"
            title="Vá para o github"
            to="https://github.com/Lucas-Eduardo-Goncalves/ArkynLibrary"
          >
            <Icons.Github />
          </Link>
          <Link
            target="_blank"
            title="Vá para o NPM"
            to="https://www.npmjs.com/settings/arkyn/packages"
          >
            <Icons.GitBranch />
          </Link>
        </ul>
      </div>
    </header>
  );
}
