import { ReactNode } from "react";

type ModalType = "create" | "delete" | "update" | "read" | "restore";

type ModalProps = {
  data?: any;
  type: ModalType;
};

type ContextProps = {
  modal: ModalProps;
  openModal: (event: ModalProps) => void;
  closeModal: () => void;

  filter: boolean;
  openFilter: () => void;
  closeFilter: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

export type { ModalProps, ContextProps, ProviderProps };
