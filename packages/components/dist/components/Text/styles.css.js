import { recipe } from "@vanilla-extract/recipes";
export const textStyle = recipe({
    base: { textDecoration: "none" },
    variants: {
        font: {
            default: { fontFamily: "var(--font-default)" },
            code: { fontFamily: "var(--font-code)" },
        },
        lineHeight: {
            xxs: { lineHeight: "100%" },
            xs: { lineHeight: "105%" },
            sm: { lineHeight: "110%" },
            md: { lineHeight: "115%" },
            lg: { lineHeight: "120%" },
            xl: { lineHeight: "125%" },
            "2xl": { lineHeight: "130%" },
            "3xl": { lineHeight: "135%" },
            "4xl": { lineHeight: "140%" },
            "5xl": { lineHeight: "150%" },
        },
        heading: {
            true: { color: "var(--heading-color)" },
            false: { color: "var(--normal-color)" },
        },
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
    defaultVariants: {
        font: "default",
        fontSize: "md",
        lineHeight: "md",
        fontWeight: "regular",
        heading: false,
    },
});
