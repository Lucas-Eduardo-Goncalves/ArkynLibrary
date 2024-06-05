import type {
  ChangeEventHandler,
  DragEventHandler,
  HTMLAttributes,
} from "react";
import { ButtonModel } from "../../models";

export type ImageUploaderProps = Omit<
  Partial<ButtonModel>,
  "isLoading" | "iconSize" 
> &
  Omit<HTMLAttributes<HTMLDivElement>, "className" | "children" | "onChange"> & {
    name: string;
    uploadUrl: string;
    isError?: boolean | undefined;
    imageSize?: { w: number; h: number };

    setLoading?: (loading: boolean) => void;
    onChange?: (e: string) => void;

    borderColor?: string;
    defaultValue?: string;
    buttonText?: string;
    changeImageButtonText?: string;
    dragText?: string;

    changeError?: (e: string) => void;

    iconSize?: number;
    iconColor?: string;
    responseFileName?: string;

    onDrop?: (event: DragEventHandler<HTMLDivElement>) => void;
  };
