import type { MouseEvent } from "react";
import type { ColorScheme, Radii, Size, Space, Variant } from "../types";
export declare class CheckboxModel {
    colorScheme: ColorScheme;
    radii: Radii;
    size: Size;
    variant: Variant;
    checked: boolean;
    defaultChecked: boolean;
    space: Space;
    strokeWidth: number;
    onCheck: (e: MouseEvent<HTMLButtonElement>) => void;
    constructor(defaults: Partial<CheckboxModel>);
}
//# sourceMappingURL=_Checkbox.d.ts.map