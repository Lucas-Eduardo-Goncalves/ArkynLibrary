import { useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState, createContext } from "react";

import { useArkyn } from "../../hooks";
import { ProviderProps, ModalProps, ContextProps } from "./_types";

export const CrudContext = createContext({} as ContextProps);

export function CrudProvider(props: ProviderProps) {
  const { children } = props;

  const { fireToast } = useArkyn();

  const loaderData = useLoaderData<any>();
  const actionData = useActionData<any>();

  const [modal, setModal] = useState<ModalProps | null>(null);
  const openModal = (modalProps: ModalProps) => setModal(modalProps);
  const closeModal = () => setModal(null);

  const [filter, setFilter] = useState(false);
  const openFilter = () => setFilter(true);
  const closeFilter = () => setFilter(false);

  useEffect(() => {
    if (loaderData?.message) {
      const { message, toast, success } = loaderData;

      const myToast = fireToast({
        type: success ? "success" : "error",
        message: message,
      });

      return () => {
        toast?.remove(myToast);
      };
    }
  }, [loaderData?.message]);

  useEffect(() => {
    if (actionData?.message) {
      const { message, success } = actionData;
      fireToast({ type: success ? "success" : "error", message: message });
    }
    if (actionData?.closeModal) closeModal();
  }, [actionData]);

  return (
    <CrudContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        filter,
        openFilter,
        closeFilter,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
}
