import { jsx as _jsx } from "react/jsx-runtime";
import { useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState, createContext } from "react";
import { useArkyn } from "../../hooks";
export const CrudContext = createContext({});
export function CrudProvider(props) {
    const { children } = props;
    const { fireToast } = useArkyn();
    const loaderData = useLoaderData();
    const actionData = useActionData();
    const [modal, setModal] = useState(null);
    const openModal = (modalProps) => setModal(modalProps);
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
        if (actionData?.closeModal)
            closeModal();
    }, [actionData]);
    return (_jsx(CrudContext.Provider, { value: {
            modal,
            openModal,
            closeModal,
            filter,
            openFilter,
            closeFilter,
        }, children: children }));
}
