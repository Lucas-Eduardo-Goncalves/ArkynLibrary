import type { LucideIcon } from "lucide-react";
import type {
  ColorScheme,
  FontSize,
  FontWeight,
  Radii,
  Space,
  Spacing,
  Variant,
} from "arkyn_tokens";

export class MultilineModel {
  colorScheme: ColorScheme;
  fontSize: FontSize;
  fontWeight: FontWeight;
  radii: Radii;
  space: Space;
  spacing: Spacing;
  variant: Variant;
  bg?: string;

  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;

  constructor(defaults: Partial<MultilineModel>) {
    const {
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
    } = defaults;

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
