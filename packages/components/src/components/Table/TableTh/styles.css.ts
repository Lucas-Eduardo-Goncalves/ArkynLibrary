import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  variants: {
    variant: {
      default: { background: "var(--table-th-default-background)" },
      card: { background: "var(--table-th-card-background)" },
    },
  },
});

export const content = style({
  display: "flex",
  alignItems: "center",
  gap: "var(--table-th-spacing)",
  padding: "var(--table-th-space)",
  whiteSpace: "nowrap",
  fontWeight: "var(--table-th-font-weight)",
  fontSize: "var(--table-th-font-size)",
  color: "var(--table-th-color)",
  textAlign: "start",
});
