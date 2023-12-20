import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { Props } from "react-input-mask";

export type SimpleInput = Omit<Props, "className" | "size" | "type"> & {
  mask: string;
  bg?: string;
  size?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  radii?: "unset" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  variant?: "outline" | "default";
  type?: "simple";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
};

export type CpfCnpjInput = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "size" | "mask" | "type" | "value"
> & {
  value: string;
  bg?: string;
  size?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  space?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "unset" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  radii?: "unset" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  variant?: "outline" | "default";
  type?: "cpf-cnpj";
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

  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
};

export type MaskedInputProps = CpfCnpjInput | SimpleInput;
