import { BadgeProps } from "./types";
import * as styles from "./styles.css";
import { useArkyn } from "../../hooks";

export function Badge(props: BadgeProps) {
  const { badge } = useArkyn();
  const defaultProps = { ...badge, ...props };

  const {
    size,
    space,
    spacing,
    radii,
    variant,
    colorScheme,
    fontSize,
    fontWeight,
    ...rest
  } = defaultProps;

  return (
    <div
      className={styles.container({
        size,
        space,
        spacing,
        radii,
        variant,
        colorScheme,
        fontSize,
        fontWeight,
      })}
      {...rest}
    />
  );
}
