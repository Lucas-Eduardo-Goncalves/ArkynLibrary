import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
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
  },
});

export const container_children = style({
  display: "flex",
  alignItems: "center",
  flex: 1,
});

export const container_button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  ":hover": { cursor: "pointer" },
});
