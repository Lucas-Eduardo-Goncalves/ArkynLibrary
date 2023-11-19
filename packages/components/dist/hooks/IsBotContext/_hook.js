import { useContext } from "react";
import { IsBotContext } from "./_Context";
export function useIsBot() {
    const value = useContext(IsBotContext);
    return value;
}
