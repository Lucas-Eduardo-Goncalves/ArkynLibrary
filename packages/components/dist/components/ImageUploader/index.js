import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useArkyn } from "../../hooks";
import { container } from "./styles.css";
import { container as button_container } from "../Button/styles.css";
import { Icons } from "../..";
export function ImageUploader(args) {
    const { button } = useArkyn();
    const { colorScheme, bg, iconColorScheme, fontSize, fontWeight, radii, size, space, spacing, variant, style, ...rest } = { ...args, ...button };
    const { borderColor = "var(--neutral-700)", buttonText = "Selecionar Imagem", changeImageButtonText = "Alterar imagem", dragText = "Ou arraste e solte a imagem aqui", onChange = () => { }, onDrop = () => { }, imageSize = { h: 300, w: 400 }, name = "file", iconSize = 40, iconColor = "var(--neutral-500)", } = args;
    const [selectedImage, setSelectedImage] = useState(null);
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            onChange(event);
        }
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            onDrop(event);
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    return (_jsxs("div", { children: [_jsx("input", { type: "file", accept: "image/*", onChange: handleFileInputChange, style: { display: "none" }, id: "fileInput", name: name }), _jsxs("div", { className: container, onDrop: handleDrop, onDragOver: handleDragOver, style: {
                    position: "relative",
                    width: imageSize.w,
                    height: imageSize.h,
                    border: `2px dashed ${borderColor}`,
                    borderRadius: "5px",
                }, children: [!selectedImage && (_jsxs(_Fragment, { children: [_jsx(Icons.Image, { size: iconSize, color: iconColor }), _jsx("label", { htmlFor: "fileInput", children: _jsx("div", { className: button_container({
                                        colorScheme,
                                        fontSize,
                                        fontWeight,
                                        radii,
                                        size,
                                        space,
                                        spacing,
                                        variant,
                                    }), style: { background: bg, ...style }, ...rest, children: buttonText }) }), _jsx("p", { children: dragText })] })), selectedImage && (_jsxs(_Fragment, { children: [_jsx("img", { src: selectedImage, alt: "Imagem selecionada", style: { maxWidth: "100%", maxHeight: "100%" } }), _jsx("div", { style: { position: "absolute", right: "10px", bottom: "10px" }, children: _jsx("label", { htmlFor: "fileInput", children: _jsxs("div", { className: button_container({
                                            colorScheme,
                                            fontSize,
                                            fontWeight,
                                            radii,
                                            size,
                                            space,
                                            spacing,
                                            variant: "outline",
                                        }), style: { background: bg, ...style }, ...rest, children: [_jsx(Icons.RefreshCw, { size: 16, color: `var(--${colorScheme}-500)` }), changeImageButtonText] }) }) })] }))] })] }));
}
