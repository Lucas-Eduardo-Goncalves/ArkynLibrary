import type { ChangeEventHandler, DragEventHandler, HTMLAttributes } from "react";
import { ButtonModel } from "../../models";
export type ImageUploaderProps = Omit<Partial<ButtonModel>, "isLoading" | "iconSize"> & Omit<HTMLAttributes<HTMLDivElement>, "className" | "children"> & {
    name?: string;
    uploadUrl: string;
    imageSize?: {
        w: number;
        h: number;
    };
    borderColor?: string;
    buttonText?: string;
    changeImageButtonText?: string;
    dragText?: string;
    iconSize?: number;
    iconColor?: string;
    onDrop?: (event: DragEventHandler<HTMLDivElement>) => void;
    onChange?: (event: ChangeEventHandler<HTMLInputElement>) => void;
};
//# sourceMappingURL=types.d.ts.map