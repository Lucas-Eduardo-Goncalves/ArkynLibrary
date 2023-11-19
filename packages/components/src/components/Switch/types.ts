import type { MouseEvent } from "react";
import { SwitchModel } from "../../models";

export type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheck?: (e: MouseEvent<HTMLButtonElement>) => void;
  name?: string;
} & Partial<SwitchModel>;
