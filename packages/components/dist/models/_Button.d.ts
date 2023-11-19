import type { ColorScheme, FontSize, FontWeight, Radii, Size, Space, Spacing, Variant } from "../types";
declare class ButtonModel {
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
    constructor(defaults: Partial<ButtonModel>);
}
export { ButtonModel };
//# sourceMappingURL=_Button.d.ts.map