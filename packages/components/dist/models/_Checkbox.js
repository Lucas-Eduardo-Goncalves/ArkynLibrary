export class CheckboxModel {
    colorScheme;
    radii;
    size;
    variant;
    checked;
    defaultChecked;
    space;
    strokeWidth;
    onCheck;
    constructor(defaults) {
        const { size = "md", space = "xs", radii = "md", variant = "default", colorScheme = "indigo", strokeWidth = 3, } = defaults;
        this.size = size;
        this.space = space;
        this.radii = radii;
        this.variant = variant;
        this.colorScheme = colorScheme;
        this.strokeWidth = strokeWidth;
    }
}
