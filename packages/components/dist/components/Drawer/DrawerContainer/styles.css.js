import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
export const container = recipe({
    base: {
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "max-content",
        background: "var(--slate-50)",
        zIndex: 99999,
    },
    variants: {
        direction: { left: { left: 0 }, right: { right: 0 } },
        showOverlay: { false: { boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)" } },
    },
    defaultVariants: { direction: "right" },
});
export const overlay = style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 99998,
    ":hover": { cursor: "pointer" },
});
