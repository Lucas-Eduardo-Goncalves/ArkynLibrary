import type { LucideIcon } from "lucide-react";
import type { ColorScheme, FontSize, FontWeight, Radii, Size, Space, Spacing, Variant } from "arkyn_tokens";
export declare class InputModel {
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
    constructor(defaults: Partial<InputModel>);
}
//# sourceMappingURL=_Input.d.ts.map