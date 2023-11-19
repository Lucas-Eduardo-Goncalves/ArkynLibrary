import { Link } from "@remix-run/react";

import type { TextProps } from "./types";
import { textStyle } from "./styles.css";
import { Input } from "../Input";
import { Button } from "../Button";

const tag = {
  link: (props: any) => <Link {...props} />,
  span: (props: any) => <span {...props} />,
  small: (props: any) => <small {...props} />,
  strong: (props: any) => <strong {...props} />,
  p: (props: any) => <p {...props} />,
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,
  h5: (props: any) => <h5 {...props} />,
  h6: (props: any) => <h6 {...props} />,
};

export function Text({
  as,
  font,
  style,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  stayCenter = false,
  stayInline = false,
  ...rest
}: TextProps) {
  const Tag = tag[as];

  const dontHeading =
    as === "link" || as === "p" || as === "small" || as === "span";

  return (
    <Tag
      className={textStyle({
        font,
        fontSize,
        fontWeight,
        lineHeight,
        heading: !dontHeading,
      })}
      style={{
        color,
        display: stayInline ? "inline" : "block",
        textAlign: stayCenter ? "center" : "unset",
        ...style,
      }}
      {...rest}
    />
  );
}
