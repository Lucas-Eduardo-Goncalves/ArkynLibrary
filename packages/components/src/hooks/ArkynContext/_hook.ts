import { useContext } from "react";
import { ArkynContext } from "./_Context";

export function useArkyn() {
  const value = useContext(ArkynContext);
  return value;
}
