import { jsx as _jsx } from "react/jsx-runtime";
import { useRouteLoaderData } from "@remix-run/react";
import { createContext } from "react";
export const LanguageContext = createContext({});
export function LanguageProvider(props) {
    const { children, archives, language } = props;
    const rootLoaderData = useRouteLoaderData("root");
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
    return (_jsx(LanguageContext.Provider, { value: getValue(), children: children }));
}
