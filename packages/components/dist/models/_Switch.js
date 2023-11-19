export class SwitchModel {
    colorScheme;
    size;
    constructor(defaults) {
        const { size = 24, colorScheme = "indigo" } = defaults;
        this.size = size;
        this.colorScheme = colorScheme;
    }
}
