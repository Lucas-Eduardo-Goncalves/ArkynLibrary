import { createContext, useContext } from "react";

type ModalContainerContextData = {
  isVisible: boolean;
  makeInvisible: () => void;
};

export const ModalContainerContext = createContext(
  {} as ModalContainerContextData
);

export function useModalContainer() {
  const context = useContext(ModalContainerContext);
  return context;
}
