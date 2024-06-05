export class InputModel {
    colorScheme;
    fontSize;
    fontWeight;
    radii;
    size;
    space;
    spacing;
    variant;
    bg;
    isError;
    icon;
    iconSize;
    iconColor;
    iconStrokeWidth;
    constructor(defaults) {
        const { size = "md", space = "md", spacing = "md", radii = "md", variant = "default", colorScheme = "indigo", fontSize = "md", fontWeight = "regular", iconSize = 20, iconColor = "var(--slate-400)", iconStrokeWidth = 2, isError, } = defaults;
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
