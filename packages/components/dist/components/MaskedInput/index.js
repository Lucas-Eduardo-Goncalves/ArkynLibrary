import { jsx as _jsx } from "react/jsx-runtime";
import { CpfCnpj } from "./_CpfCnpj";
import { Simple } from "./_Simple";
export function MaskedInput(props) {
    if (props.type === "cpf-cnpj") {
        return _jsx(CpfCnpj, { ...props });
    }
    else {
        return _jsx(Simple, { ...props });
    }
}
