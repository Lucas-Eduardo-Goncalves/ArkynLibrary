import type { Dispatch, RefObject } from "react";
import type { PositionProps } from "./types";
type CalcPositionProps = {
    initialPosition: PositionProps;
    popoverContentRef: RefObject<HTMLDivElement>;
    setDirection: Dispatch<React.SetStateAction<PositionProps>>;
};
export declare function calcPosition({ initialPosition, popoverContentRef, setDirection, }: CalcPositionProps): void;
export {};
//# sourceMappingURL=calcPosition.d.ts.map