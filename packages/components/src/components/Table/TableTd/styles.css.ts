import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    fontSize: "var(--table-td-font-size)",
    fontWeight: "var(--table-td-font-weight)",
    color: "var(--table-td-color)",
  },
  variants: {
    variant: {
      card: {
        padding: "var(--table-td-card-space)",
        background: "var(--table-row-background)",
      },
      default: { padding: "var(--table-td-default-space)" },
    },
    isFirst: {
      true: { borderRadius: "var(--table-td-radii) 0 0 var(--table-td-radii)" },
    },
    isLast: {
      true: { borderRadius: "0 var(--table-td-radii) var(--table-td-radii) 0" },
    },
  },
});
