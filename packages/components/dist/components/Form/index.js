import { Form as RemixForm } from "@remix-run/react";
import { FormController } from "./FormController";
import { FormError } from "./FormError";
import { FormLabel } from "./FormLabel";
export const Form = {
    Container: RemixForm,
    Controller: FormController,
    Error: FormError,
    Label: FormLabel,
};
