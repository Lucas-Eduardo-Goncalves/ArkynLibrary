import { useContext } from "react";
import { CrudContext } from "./_Context";
export function useCrud() {
    const value = useContext(CrudContext);
    return value;
}
