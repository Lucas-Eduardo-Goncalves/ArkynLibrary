import type { TableBodyProps } from "./types";

export function TableBody({ children, isEmpty, ...rest }: TableBodyProps) {
  return (
    <tbody {...rest}>
      {!isEmpty && children}
      {isEmpty && <h5>Tabela vazia</h5>}
    </tbody>
  );
}
