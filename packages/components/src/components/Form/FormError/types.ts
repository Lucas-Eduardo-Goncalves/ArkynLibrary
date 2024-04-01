import type { HTMLMotionProps } from "framer-motion";

export type FormErrorProps = Omit<HTMLMotionProps<"strong">, "className"> & {
  font?: "default" | "code";
  dontShowError?: boolean;
  fontSize?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";
  fontWeight?:
    | "bold"
    | "light"
    | "extra-light"
    | "regular"
    | "semibold"
    | "extra-bold";
};
