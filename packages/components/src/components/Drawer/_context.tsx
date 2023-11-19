import { createContext, useContext } from "react";

type DrawerContainerContextData = {
  isVisible: boolean;
  makeInvisible: () => void;
};

export const DrawerContainerContext = createContext(
  {} as DrawerContainerContextData
);

export function useDrawerContainer() {
  const context = useContext(DrawerContainerContext);
  return context;
}
