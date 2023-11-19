import { recipe } from "@vanilla-extract/recipes";
export const container = recipe({
    base: {
        display: "flex",
        flex: 1,
        height: "min-content",
    },
    variants: {
        direction: {
            row: { flexDirection: "row", alignItems: "center" },
            column: { flexDirection: "column" },
        },
        space: {
            unset: {},
            xxs: { padding: "var(--space-xxs)" },
            xs: { padding: "var(--space-xs)" },
            sm: { padding: "var(--space-sm)" },
            md: { padding: "var(--space-md)" },
            lg: { padding: "var(--space-lg)" },
            xl: { padding: "var(--space-xl)" },
            "2xl": { padding: "var(--space-2xl)" },
        },
        spacing: {
            unset: {},
            xxs: { gap: "var(--spacing-xxs)" },
            xs: { gap: "var(--spacing-xs)" },
            sm: { gap: "var(--spacing-sm)" },
            md: { gap: "var(--spacing-md)" },
            lg: { gap: "var(--spacing-lg)" },
            xl: { gap: "var(--spacing-xl)" },
            "2xl": { gap: "var(--spacing-2xl)" },
        },
    },
});
