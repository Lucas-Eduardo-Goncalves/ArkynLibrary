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

class ButtonModel {
  bg: string;
  colorScheme: ColorScheme;
  fontSize: FontSize;
  fontWeight: FontWeight;
  iconColorScheme: ColorScheme;
  iconSize: Size;
  isLoading: boolean;
  radii: Radii;
  size: Size;
  space: Space;
  spacing: Spacing;
  variant: Variant;

  constructor(defaults: Partial<ButtonModel>) {
    const {
      size = "md",
      space = "md",
      spacing = "md",
      radii = "md",
      variant = "default",
      colorScheme = "indigo",
      iconColorScheme = "slate",
      iconSize = "xxs",
      fontSize = "md",
      fontWeight = "regular",
    } = defaults;

    this.size = size;
    this.space = space;
    this.spacing = spacing;
    this.radii = radii;
    this.variant = variant;
    this.colorScheme = colorScheme;
    this.iconColorScheme = iconColorScheme;
    this.iconSize = iconSize;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
  }
}

export { ButtonModel };
