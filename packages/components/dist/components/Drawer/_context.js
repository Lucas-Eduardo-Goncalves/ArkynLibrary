import { createContext, useContext } from "react";
export const DrawerContainerContext = createContext({});
export function useDrawerContainer() {
    const context = useContext(DrawerContainerContext);
    return context;
}
