import type { ColorScheme } from "arkyn_tokens";

export class SwitchModel {
  colorScheme: ColorScheme;
  size: number;

  constructor(defaults: Partial<SwitchModel>) {
    const { size = 24, colorScheme = "indigo" } = defaults;

    this.size = size;
    this.colorScheme = colorScheme;
  }
}
