import { RemixLinkProps } from "@remix-run/react/dist/components";
import { HTMLAttributes } from "react";
type BaseTypingProps = {
    font?: "default" | "code";
    stayCenter?: boolean;
    stayInline?: boolean;
    fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    lineHeight?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    fontWeight?: "bold" | "light" | "extra-light" | "regular" | "semibold" | "extra-bold";
};
export type AsLinkProps = Omit<RemixLinkProps & React.RefAttributes<HTMLAnchorElement>, "className"> & BaseTypingProps & {
    as: "link";
};
type AsStrongProps = Omit<HTMLAttributes<HTMLElement>, "className"> & BaseTypingProps & {
    as: "strong";
};
type AsSpanProps = Omit<HTMLAttributes<HTMLSpanElement>, "className"> & BaseTypingProps & {
    as: "span";
};
type AsSmallProps = Omit<HTMLAttributes<HTMLElement>, "className"> & BaseTypingProps & {
    as: "small";
};
type AsPProps = Omit<HTMLAttributes<HTMLParagraphElement>, "className"> & BaseTypingProps & {
    as: "p";
};
type AsHeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "className"> & BaseTypingProps & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export type TextProps = AsLinkProps | AsSpanProps | AsSmallProps | AsPProps | AsHeadingProps | AsStrongProps;
export {};
//# sourceMappingURL=types.d.ts.map