import { useContext } from "react";
import { LanguageContext } from "./_Context";

export function useLanguage() {
  const value = useContext(LanguageContext);
  return value;
}
