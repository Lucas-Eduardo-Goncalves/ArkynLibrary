import { createContext } from "react";
import type { ProviderProps } from "./_types";

export const IsBotContext = createContext(false);

export function IsBotProvider(props: ProviderProps) {
  const { children, isBot } = props;
  return (
    <IsBotContext.Provider value={isBot}>{children}</IsBotContext.Provider>
  );
}
