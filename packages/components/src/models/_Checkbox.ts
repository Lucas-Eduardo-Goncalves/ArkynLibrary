import type { MouseEvent } from "react";
import type { ColorScheme, Radii, Size, Space, Variant } from "arkyn_tokens";

export class CheckboxModel {
  colorScheme: ColorScheme;
  radii: Radii;
  size: Size;
  variant: Variant;
  checked: boolean;
  defaultChecked: boolean;
  space: Space;
  strokeWidth: number;
  onCheck: (e: MouseEvent<HTMLButtonElement>) => void;

  constructor(defaults: Partial<CheckboxModel>) {
    const {
      size = "md",
      space = "xs",
      radii = "md",
      variant = "default",
      colorScheme = "indigo",
      strokeWidth = 3,
    } = defaults;

    this.size = size;
    this.space = space;
    this.radii = radii;
    this.variant = variant;
    this.colorScheme = colorScheme;
    this.strokeWidth = strokeWidth;
  }
}
