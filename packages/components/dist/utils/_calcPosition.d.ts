import type { Dispatch, RefObject } from "react";
type InitialPositionProps = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "left" | "bottom" | "right";
type CalcPositionProps = {
    initialPosition: InitialPositionProps;
    popoverContentRef: RefObject<HTMLDivElement>;
    setDirection: Dispatch<React.SetStateAction<InitialPositionProps>>;
};
export declare function calcPosition({ initialPosition, popoverContentRef, setDirection, }: CalcPositionProps): void;
export {};
//# sourceMappingURL=_calcPosition.d.ts.map