export class MultilineModel {
    colorScheme;
    fontSize;
    fontWeight;
    radii;
    space;
    spacing;
    variant;
    bg;
    icon;
    iconSize;
    iconColor;
    iconStrokeWidth;
    constructor(defaults) {
        const { space = "md", spacing = "md", radii = "md", variant = "default", colorScheme = "indigo", fontSize = "md", fontWeight = "regular", iconSize = 20, iconColor = "var(--slate-400)", iconStrokeWidth = 2, } = defaults;
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
