import type { LucideIcon } from "lucide-react";
import type {
  ColorScheme,
  FontSize,
  FontWeight,
  Radii,
  Size,
  Space,
  Spacing,
  Variant,
} from "arkyn_tokens";

export class InputModel {
  colorScheme: ColorScheme;
  fontSize: FontSize;
  fontWeight: FontWeight;
  radii: Radii;
  size: Size;
  space: Space;
  spacing: Spacing;
  variant: Variant;
  bg?: string;
  isError?: boolean;

  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;

  constructor(defaults: Partial<InputModel>) {
    const {
      size = "md",
      space = "md",
      spacing = "md",
      radii = "md",
      variant = "default",
      colorScheme = "indigo",
      fontSize = "md",
      fontWeight = "regular",
      iconSize = 20,
      iconColor = "var(--slate-400)",
      iconStrokeWidth = 2,
      isError,
    } = defaults;

    this.isError = isError;
    this.size = size;
    this.iconSize = iconSize;
    this.iconColor = iconColor;
    this.iconStrokeWidth = iconStrokeWidth;
    this.space = space;
    this.spacing = spacing;
    this.radii = radii;
    this.variant = variant;
    this.colorScheme = colorScheme;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
  }
}
