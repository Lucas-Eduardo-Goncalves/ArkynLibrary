import { recipe } from "@vanilla-extract/recipes";
export const container = recipe({
    base: {},
    variants: {
        variant: {
            default: {
                background: "var(--table-row-background)",
                ":hover": { background: "var(--table-row-background-hover)" },
                selectors: {
                    "&:not(:last-child)": {
                        borderBottom: "var(--table-row-border-bottom)",
                    },
                },
            },
            card: {},
        },
    },
});
