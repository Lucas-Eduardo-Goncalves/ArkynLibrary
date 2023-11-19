import { DividerProps } from "./types";
import { container } from "./styles.css";

export function Divider({ direction, color = undefined }: DividerProps) {
  return (
    <div className={container({ direction })} style={{ background: color }} />
  );
}
