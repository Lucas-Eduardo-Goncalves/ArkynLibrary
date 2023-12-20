import { CpfCnpj } from "./_CpfCnpj";
import { Simple } from "./_Simple";
import type { MaskedInputProps } from "./types";

export function MaskedInput(props: MaskedInputProps) {
  if (props.type === "cpf-cnpj") {
    return <CpfCnpj {...props} />;
  } else {
    return <Simple {...props} />;
  }
}
