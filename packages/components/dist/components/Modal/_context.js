import { createContext, useContext } from "react";
export const ModalContainerContext = createContext({});
export function useModalContainer() {
    const context = useContext(ModalContainerContext);
    return context;
}
