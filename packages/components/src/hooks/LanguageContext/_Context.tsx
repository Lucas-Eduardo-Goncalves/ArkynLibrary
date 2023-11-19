import { useRouteLoaderData } from "@remix-run/react";
import { createContext } from "react";

import type { ContextProps, ProviderProps } from "./_types";

export const LanguageContext = createContext({} as ContextProps);

export function LanguageProvider(props: ProviderProps) {
  const { children, archives, language } = props;

  const rootLoaderData = useRouteLoaderData<any>("root");
  const { en, pt } = archives;

  function getValue() {
    switch (rootLoaderData.language || language) {
      case "en":
        return en;
      case "pt":
        return pt;
      default:
        return pt;
    }
  }

  return (
    <LanguageContext.Provider value={getValue()}>
      {children}
    </LanguageContext.Provider>
  );
}
