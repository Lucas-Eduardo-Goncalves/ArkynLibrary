import { useArkyn } from "../../hooks";
import { Spinner } from "../Spinner";
import { container } from "./styles.css";
import type { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const { button } = useArkyn();
  const defaultProps = { ...button, ...props };

  const {
    colorScheme,
    bg,
    iconColorScheme,
    iconSize,
    fontSize,
    fontWeight,
    radii,
    size,
    space,
    spacing,
    variant,
    isLoading,
    disabled,
    children,
    style,
    ...rest
  } = defaultProps;

  return (
    <button
      className={container({
        colorScheme,
        fontSize,
        fontWeight,
        radii,
        size,
        space,
        spacing,
        variant,
      })}
      style={{ background: bg, ...style }}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading && <Spinner size={iconSize} colorScheme={iconColorScheme} />}
      {!isLoading && children}
    </button>
  );
}
