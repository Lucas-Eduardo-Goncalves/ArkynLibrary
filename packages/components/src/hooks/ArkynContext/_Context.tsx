import { AlertCircle, CheckCircle, InfoIcon, XCircle } from "lucide-react";
import { createContext } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  BadgeModel,
  ButtonModel,
  CheckboxModel,
  InputModel,
  MultilineModel,
  PaginationModel,
  SwitchModel,
} from "../../models";
import type { ContextProps, FireToast, ProviderProps } from "./_types";

export const ArkynContext = createContext({} as ContextProps);

function getToastType(type: FireToast["type"]) {
  switch (type) {
    case "error":
      return { color: "red", icon: XCircle };
    case "success":
      return { color: "green", icon: CheckCircle };
    case "info":
      return { color: "sky", icon: InfoIcon };
    case "warning":
      return { color: "amber", icon: AlertCircle };
  }
}

function fireToast(props: FireToast) {
  const { message, type } = props;
  const { color, icon: Icon } = getToastType(type);

  return toast(message, {
    icon: <Icon color={`var(--${color}-600)`} size={24} />,
    style: {
      fontWeight: 600,
      color: `var(--${color}-600)`,
      backgroundColor: `var(--${color}-200)`,
    },
  });
}

export function ArkynProvider(props: ProviderProps) {
  const { children } = props;

  const badge = new BadgeModel(props.button || {});
  const button = new ButtonModel(props.button || {});
  const checkbox = new CheckboxModel(props.checkbox || {});
  const input = new InputModel(props.input || {});
  const multiline = new MultilineModel(props.multiline || {});
  const pagination = new PaginationModel(props.pagination || {});
  const _switch = new SwitchModel(props.switch || {});

  return (
    <ArkynContext.Provider
      value={{
        switch: _switch,
        badge,
        button,
        checkbox,
        input,
        multiline,
        fireToast,
        pagination,
      }}
    >
      <Toaster
        position="top-right"
        toastOptions={{ style: { zIndex: 9999, borderRadius: "4px" } }}
      />

      {children}
    </ArkynContext.Provider>
  );
}
