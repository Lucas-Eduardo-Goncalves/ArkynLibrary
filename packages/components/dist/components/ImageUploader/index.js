import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useArkyn } from "../../hooks";
import { Form as ArkynForm } from "../Form";
import { Form, useActionData } from "@remix-run/react";
import { Icons } from "../..";
import { container as button_container } from "../Button/styles.css";
import { useFormController } from "../Form/FormController";
import { container } from "./styles.css";
export function ImageUploader(args) {
    const { button } = useArkyn();
    const { colorScheme, bg, iconColorScheme, fontSize, fontWeight, radii, size, space, spacing, variant, responseFileName = "file_url", style, uploadUrl, ...rest } = { ...args, ...button };
    const { borderColor = "var(--neutral-700)", buttonText = "Selecionar Imagem", changeImageButtonText = "Alterar imagem", dragText = "Ou arraste e solte a imagem aqui", onChange = () => { }, onDrop = () => { }, imageSize = { h: 300, w: 400 }, name = "file", iconSize = 40, iconColor = "var(--neutral-500)", defaultValue, } = args;
    const { inputRef } = useFormController();
    const formRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(defaultValue || null);
    const [imageValue, setImageValue] = useState(defaultValue || null);
    const [imageError, setImageError] = useState("");
    async function submitForcedForm(form) {
        const formData = new FormData(form);
        await fetch(form.action, {
            method: form.method,
            body: formData,
        })
            .then(async (response) => {
            return await response.json();
        })
            .then((response) => {
            setImageValue(response[responseFileName]);
            if (!response?.success) {
                setImageError(response?.message || "Erro ao enviar imagem");
            }
        });
    }
    const handleChange = (file) => {
        if (formRef.current) {
            setSelectedImage(URL.createObjectURL(file));
            submitForcedForm(formRef.current);
        }
    };
    const actionData = useActionData();
    const borderError = !actionData?.fieldErrors?.[name] && !imageError
        ? `2px dashed ${borderColor}`
        : "2px dashed var(--red-600)";
    return (_jsxs(_Fragment, { children: [_jsx("input", { name: name, ref: inputRef, type: "hidden", readOnly: true, value: imageValue || "" }), _jsxs(Form, { method: "POST", encType: "multipart/form-data", action: uploadUrl, ref: formRef, children: [_jsx("input", { type: "file", accept: "image/*", onChange: (e) => {
                            onChange(e);
                            e.target.files && handleChange(e.target.files[0]);
                        }, style: { display: "none" }, id: `id_${name}`, name: "file" }), _jsxs("div", { className: container, onDrop: (e) => {
                            e.preventDefault();
                            e.dataTransfer.files && handleChange(e.dataTransfer.files[0]);
                            onDrop(e);
                        }, style: {
                            position: "relative",
                            minWidth: imageSize.w,
                            minHeight: imageSize.h,
                            maxWidth: imageSize.w,
                            border: borderError,
                            borderRadius: "5px",
                        }, children: [!selectedImage && (_jsxs(_Fragment, { children: [_jsx(Icons.Image, { size: iconSize, color: iconColor }), _jsx("label", { htmlFor: `id_${name}`, children: _jsx("div", { className: button_container({
                                                colorScheme,
                                                fontSize,
                                                fontWeight,
                                                radii,
                                                size: "sm",
                                                space,
                                                spacing,
                                                variant: "ghost",
                                            }), style: { background: bg, ...style }, children: buttonText }) }), _jsx("p", { children: dragText })] })), selectedImage && (_jsxs(_Fragment, { children: [_jsx("img", { src: selectedImage, alt: "Imagem selecionada", style: { maxWidth: "100%", maxHeight: "100%" } }), _jsx("div", { style: { position: "absolute", right: "10px", bottom: "10px" }, children: _jsx("label", { htmlFor: `id_${name}`, children: _jsxs("div", { className: button_container({
                                                    colorScheme,
                                                    fontSize,
                                                    fontWeight,
                                                    radii,
                                                    size: "sm",
                                                    space,
                                                    spacing,
                                                    variant: "outline",
                                                }), style: { background: bg, ...style }, ...rest, children: [_jsx(Icons.RefreshCw, { size: 16, color: `var(--${colorScheme}-500)` }), changeImageButtonText] }) }) })] }))] }), imageError && _jsx(ArkynForm.Error, { children: imageError })] })] }));
}
