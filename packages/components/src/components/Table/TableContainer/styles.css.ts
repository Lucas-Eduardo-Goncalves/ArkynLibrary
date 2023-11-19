import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    overflow: "clip",
    borderRadius: "var(--table-container-radii)",
  },
  variants: {
    variant: {
      default: {
        border: "var(--table-container-border)",
        background: "var(--table-container-background)",
      },
      card: {},
    },
  },
});

export const content = recipe({
  variants: {
    variant: {
      default: { borderCollapse: "collapse" },
      card: { borderCollapse: "separate", borderSpacing: "0 8px" },
    },
  },
});
