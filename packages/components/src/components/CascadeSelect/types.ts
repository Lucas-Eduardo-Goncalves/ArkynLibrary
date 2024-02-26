import { LucideIcon } from "lucide-react";
import type { CSSProperties, InputHTMLAttributes } from "react";

export type SelectProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "size" | "defaultValue" | "onChange" | "onSelect" | "value"
> & {
  containerStyle?: CSSProperties;
  optionsContainerStyle?: CSSProperties;
  value?: string[] | number[];
  bg?: string;
  isSearchable?: boolean;
  onSelected?: (e: string[]) => void;
  defaultValue?: string[] | number[];
  options?: {
    label: string;
    value: string | number;
    parent_id: number;
  }[];
  size?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  radii?: "unset" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  variant?: "outline" | "default";
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
  colorScheme?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";

  onSearch?: (e: string) => void;

  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
};
