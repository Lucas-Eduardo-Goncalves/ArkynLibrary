class ButtonModel {
    bg;
    colorScheme;
    fontSize;
    fontWeight;
    iconColorScheme;
    iconSize;
    isLoading;
    radii;
    size;
    space;
    spacing;
    variant;
    constructor(defaults) {
        const { size = "md", space = "md", spacing = "md", radii = "md", variant = "default", colorScheme = "indigo", iconColorScheme = "slate", iconSize = "xxs", fontSize = "md", fontWeight = "regular", } = defaults;
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
