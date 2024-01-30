import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
export const group = recipe({
    base: {
        display: "flex",
        alignItems: "center",
        zIndex: 2,
        flex: 1,
        position: "relative",
    },
    variants: {
        radii: {
            unset: {},
            xxs: { borderRadius: "var(--radii-xxs)" },
            xs: { borderRadius: "var(--radii-xs)" },
            sm: { borderRadius: "var(--radii-sm)" },
            md: { borderRadius: "var(--radii-md)" },
            lg: { borderRadius: "var(--radii-lg)" },
            xl: { borderRadius: "var(--radii-xl)" },
            "2xl": { borderRadius: "var(--radii-2xl)" },
            full: { borderRadius: "9999999px" },
        },
        size: {
            unset: {},
            xxs: { minHeight: "var(--size-xxs)" },
            xs: { minHeight: "var(--size-xs)" },
            sm: { minHeight: "var(--size-sm)" },
            md: { minHeight: "var(--size-md)" },
            lg: { minHeight: "var(--size-lg)" },
            xl: { minHeight: "var(--size-xl)" },
            "2xl": { minHeight: "var(--size-2xl)" },
        },
        space: {
            unset: {},
            xxs: { padding: "0 var(--space-xxs)" },
            xs: { padding: "0 var(--space-xs)" },
            sm: { padding: "0 var(--space-sm)" },
            md: { padding: "0 var(--space-md)" },
            lg: { padding: "0 var(--space-lg)" },
            xl: { padding: "0 var(--space-xl)" },
            "2xl": { padding: "0 var(--space-2xl)" },
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
        variant: {
            default: {
                background: "var(--slate-50)",
                border: "1px solid var(--slate-300)",
            },
            outline: {
                background: "transparent",
                border: "1px solid var(--slate-300)",
            },
        },
    },
});
export const container = recipe({
    base: {
        border: "none",
        background: "none",
        lineHeight: "100%",
        outline: "none",
        zIndex: 2,
        color: "var(--slate-600)",
        "::placeholder": { color: "var(--slate-400)" },
    },
    variants: {
        fontSize: {
            xxs: { fontSize: "var(--font-size-xxs)" },
            xs: { fontSize: "var(--font-size-xs)" },
            sm: { fontSize: "var(--font-size-sm)" },
            md: { fontSize: "var(--font-size-md)" },
            lg: { fontSize: "var(--font-size-lg)" },
            xl: { fontSize: "var(--font-size-xl)" },
            "2xl": { fontSize: "var(--font-size-2xl)" },
            "3xl": { fontSize: "var(--font-size-3xl)" },
            "4xl": { fontSize: "var(--font-size-4xl)" },
            "5xl": { fontSize: "var(--font-size-5xl)" },
        },
        fontWeight: {
            "extra-light": { fontWeight: "var(--font-weight-extra-light)" },
            light: { fontWeight: "var(--font-weight-light)" },
            regular: { fontWeight: "var(--font-weight-regular)" },
            semibold: { fontWeight: "var(--font-weight-semibold)" },
            bold: { fontWeight: "var(--font-weight-bold)" },
            "extra-bold": { fontWeight: "var(--font-weight-extra-bold)" },
        },
    },
});
export const option = style({
    padding: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "var(--white)",
    ":hover": {
        cursor: "pointer",
        background: "var(--slate-50)",
    },
});
export const overlay = style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    ":hover": { cursor: "pointer" },
});
