import { Link as RemixLink, useLocation } from "@remix-run/react";
import { Icons } from "arkyn_components";

type TitleProps = {
  label: string;
  description: string;
};

type LinkProps = {
  label: string;
  to: string;
};

function Title(args: TitleProps) {
  const { description, label } = args;
  return (
    <h2>
      {label}
      <div title={description}>
        <Icons.Info />
      </div>
    </h2>
  );
}

function NavigationLink(args: LinkProps) {
  const { to, label } = args;
  const { pathname } = useLocation();

  const is_activated = pathname === to;

  return (
    <RemixLink className={is_activated ? "is_activated" : ""} to={to}>
      {label}
    </RemixLink>
  );
}

export function LayoutNavigation() {
  return (
    <nav className="layout_navigation">
      <NavigationLink to="/v1" label="Introdução" />

      <Title
        label="Componentes"
        description="São o agrupamento de todos os components básicos."
      />

      <NavigationLink to="/v1/compoments/button" label="Badge" />
      <NavigationLink to="/v1/components/button" label="Button" />
      <NavigationLink to="/v1/components/button" label="Checkbox" />
      <NavigationLink to="/v1/components/button" label="ColorInput" />
      <NavigationLink to="/v1/components/button" label="CurrencyInput" />
      <NavigationLink to="/v1/components/button" label="Divider" />
      <NavigationLink to="/v1/components/button" label="Drawer" />
      <NavigationLink to="/v1/components/button" label="Form" />
      <NavigationLink to="/v1/components/button" label="Input" />
      <NavigationLink to="/v1/components/button" label="MaskedInput" />
      <NavigationLink to="/v1/components/button" label="Multiline" />
      <NavigationLink to="/v1/components/button" label="Pagination" />
      <NavigationLink to="/v1/components/button" label="Popover" />
      <NavigationLink to="/v1/components/button" label="Spinner" />
      <NavigationLink to="/v1/components/button" label="Switch" />
      <NavigationLink to="/v1/components/button" label="Table" />
      <NavigationLink to="/v1/components/button" label="Text" />

      <Title label="Hooks" description="São o agrupamento de todos os hooks." />

      <NavigationLink to="/v1/hooks/usearkyn" label="useArkyn" />
      <NavigationLink to="/v1/hooks/usearkyn" label="useCrud" />
      <NavigationLink to="/v1/hooks/usearkyn" label="useIsBot" />
      <NavigationLink to="/v1/hooks/usearkyn" label="useLanguage" />
      <NavigationLink to="/v1/hooks/usearkyn" label="useScopedParams" />

      <Title
        label="Utilidades"
        description="São utilidades para a parte do servidor, não pode ser incorporada no lado do cliente, apenas SSR."
      />
      <NavigationLink to="/v1/utils/api" label="api" />
      <NavigationLink to="/v1/utils/api" label="regex" />
      <NavigationLink to="/v1/utils/api" label="badRequest" />
      <NavigationLink to="/v1/utils/api" label="filterControl" />
      <NavigationLink to="/v1/utils/api" label="getScopedParams" />
      <NavigationLink to="/v1/utils/api" label="Authenticator" />

      <Title
        label="Tokens"
        description="São o tipos utilizados por toda a biblioteca, tanto a de componentes quanto a de utilidades."
      />
      <NavigationLink to="/v1/tokens/colorscheme" label="ColorScheme" />
      <NavigationLink to="/v1/tokens/colorscheme" label="FontSize" />
      <NavigationLink to="/v1/tokens/colorscheme" label="FontWeight" />
      <NavigationLink to="/v1/tokens/colorscheme" label="Radii" />
      <NavigationLink to="/v1/tokens/colorscheme" label="Size" />
      <NavigationLink to="/v1/tokens/colorscheme" label="Space" />
      <NavigationLink to="/v1/tokens/colorscheme" label="Spacing" />
      <NavigationLink to="/v1/tokens/colorscheme" label="Variant" />
    </nav>
  );
}
