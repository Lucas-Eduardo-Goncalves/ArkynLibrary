import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
export const IsBotContext = createContext(false);
export function IsBotProvider(props) {
    const { children, isBot } = props;
    return (_jsx(IsBotContext.Provider, { value: isBot, children: children }));
}
