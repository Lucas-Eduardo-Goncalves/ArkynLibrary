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

export class PaginationModel {
  colorScheme: ColorScheme;
  fontSize: FontSize;
  fontWeight: FontWeight;
  radii: Radii;
  size: Size;
  space: Space;
  spacing: Spacing;
  variant: Variant;

  constructor(defaults: Partial<PaginationModel>) {
    const {
      size = "sm",
      space = "sm",
      spacing = "sm",
      radii = "md",
      variant = "default",
      colorScheme = "indigo",
      fontSize = "md",
      fontWeight = "regular",
    } = defaults;

    this.size = size;
    this.space = space;
    this.spacing = spacing;
    this.radii = radii;
    this.variant = variant;
    this.colorScheme = colorScheme;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
  }
}
