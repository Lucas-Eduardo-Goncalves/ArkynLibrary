import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    backgroundColor: "var(--slate-300)",
  },

  variants: {
    direction: {
      horizontal: { minWidth: "100%", minHeight: "1px", maxHeight: "1px" },
      vertical: { minHeight: "100%", minWidth: "1px", maxWidth: "1px" },
    },
  },

  defaultVariants: { direction: "horizontal" },
});
