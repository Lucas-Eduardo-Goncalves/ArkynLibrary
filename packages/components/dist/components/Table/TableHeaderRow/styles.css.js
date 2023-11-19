import { recipe } from "@vanilla-extract/recipes";
export const container = recipe({
    base: {},
    variants: {
        variant: {
            default: {},
            card: {},
        },
    },
});
