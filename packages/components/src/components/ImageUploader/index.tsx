import { useRef, useState } from "react";
import { useArkyn } from "../../hooks";
import { Form as ArkynForm } from "../Form";
import type { ImageUploaderProps } from "./types";

import { Form, useActionData } from "@remix-run/react";
import { Icons } from "../..";
import { container as button_container } from "../Button/styles.css";
import { useFormController } from "../Form/FormController";
import { container } from "./styles.css";

export function ImageUploader(args: ImageUploaderProps) {
  const { button } = useArkyn();

  const {
    colorScheme,
    bg,
    iconColorScheme,
    fontSize,
    fontWeight,
    radii,
    size,
    space,
    spacing,
    variant,
    responseFileName = "file_url",
    style,
    uploadUrl,
    ...rest
  } = { ...args, ...button };

  const {
    borderColor = "var(--neutral-700)",
    buttonText = "Selecionar Imagem",
    changeImageButtonText = "Alterar imagem",
    dragText = "Ou arraste e solte a imagem aqui",
    onChange = () => {},
    onDrop = () => {},
    imageSize = { h: 300, w: 400 },
    name = "file",
    iconSize = 40,
    iconColor = "var(--neutral-500)",
    defaultValue,
  } = args;

  const { inputRef } = useFormController();

  const formRef = useRef<HTMLFormElement>(null);
  const [selectedImage, setSelectedImage] = useState(defaultValue || null);
  const [imageValue, setImageValue] = useState(defaultValue || null);
  const [imageError, setImageError] = useState("");

  async function submitForcedForm(form: HTMLFormElement) {
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

  const handleChange = (file: File) => {
    if (formRef.current) {
      setSelectedImage(URL.createObjectURL(file));
      submitForcedForm(formRef.current);
    }
  };

  const actionData = useActionData<any>();
  const borderError =
    !actionData?.fieldErrors?.[name] && !imageError
      ? `2px dashed ${borderColor}`
      : "2px dashed var(--red-600)";

  return (
    <>
      <input
        name={name}
        ref={inputRef}
        type="hidden"
        readOnly
        value={imageValue || ""}
      />

      <Form
        method="POST"
        encType="multipart/form-data"
        action={uploadUrl}
        ref={formRef}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            onChange(e);
            e.target.files && handleChange(e.target.files[0]);
          }}
          style={{ display: "none" }}
          id={`id_${name}`}
          name="file"
        />
        <div
          className={container}
          onDrop={(e) => {
            e.preventDefault();
            e.dataTransfer.files && handleChange(e.dataTransfer.files[0]);
            onDrop(e);
          }}
          style={{
            position: "relative",
            minWidth: imageSize.w,
            minHeight: imageSize.h,
            maxWidth: imageSize.w,
            border: borderError,
            borderRadius: "5px",
          }}
        >
          {!selectedImage && (
            <>
              <Icons.Image size={iconSize} color={iconColor} />
              <label htmlFor={`id_${name}`}>
                <div
                  className={button_container({
                    colorScheme,
                    fontSize,
                    fontWeight,
                    radii,
                    size: "sm",
                    space,
                    spacing,
                    variant: "ghost",
                  })}
                  style={{ background: bg, ...style }}
                >
                  {buttonText}
                </div>
              </label>
              <p>{dragText}</p>
            </>
          )}

          {selectedImage && (
            <>
              <img
                src={selectedImage}
                alt="Imagem selecionada"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />

              <div
                style={{ position: "absolute", right: "10px", bottom: "10px" }}
              >
                <label htmlFor={`id_${name}`}>
                  <div
                    className={button_container({
                      colorScheme,
                      fontSize,
                      fontWeight,
                      radii,
                      size: "sm",
                      space,
                      spacing,
                      variant: "outline",
                    })}
                    style={{ background: bg, ...style }}
                    {...rest}
                  >
                    <Icons.RefreshCw
                      size={16}
                      color={`var(--${colorScheme}-500)`}
                    />
                    {changeImageButtonText}
                  </div>
                </label>
              </div>
            </>
          )}
        </div>
        {imageError && <ArkynForm.Error>{imageError}</ArkynForm.Error>}
      </Form>
    </>
  );
}
