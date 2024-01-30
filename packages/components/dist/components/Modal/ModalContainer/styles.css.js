import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
export const container = style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9997,
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    overflow: "auto",
    padding: "40px",
});
export const content = recipe({
    base: {
        background: "var(--slate-50)",
        width: "max-content",
        height: "max-content",
        zIndex: 9998,
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
    },
});
export const overlay = style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 9997,
    ":hover": { cursor: "pointer" },
});
