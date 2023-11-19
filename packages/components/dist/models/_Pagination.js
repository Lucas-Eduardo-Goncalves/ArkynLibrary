export class PaginationModel {
    colorScheme;
    fontSize;
    fontWeight;
    radii;
    size;
    space;
    spacing;
    variant;
    constructor(defaults) {
        const { size = "sm", space = "sm", spacing = "sm", radii = "md", variant = "default", colorScheme = "indigo", fontSize = "md", fontWeight = "regular", } = defaults;
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
