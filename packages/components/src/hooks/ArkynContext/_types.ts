import type { ReactNode } from "react";

import type {
  BadgeModel,
  ButtonModel,
  CheckboxModel,
  InputModel,
  MultilineModel,
  PaginationModel,
  SwitchModel,
} from "../../models";

type FireToast = {
  type: "error" | "success" | "warning" | "info";
  message: string;
};

type ContextProps = {
  badge: BadgeModel;
  button: ButtonModel;
  checkbox: CheckboxModel;
  input: InputModel;
  multiline: MultilineModel;
  switch: SwitchModel;
  pagination: PaginationModel;

  fireToast: (props: FireToast) => string;
};

type ProviderProps = {
  //PROVIDER
  children: ReactNode;

  //COMPONENTS
  badge?: Partial<BadgeModel>;
  button?: Partial<ButtonModel>;
  checkbox?: Partial<CheckboxModel>;
  input?: Partial<InputModel>;
  switch?: Partial<SwitchModel>;
  multiline?: Partial<MultilineModel>;
  pagination?: Partial<PaginationModel>;
};

type ArkynConfig = Omit<ProviderProps, "children">;

export type { ContextProps, FireToast, ProviderProps, ArkynConfig };
