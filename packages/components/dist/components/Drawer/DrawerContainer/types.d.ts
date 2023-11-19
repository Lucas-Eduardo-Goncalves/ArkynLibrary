import type { HTMLMotionProps } from "framer-motion";
export type DrawerContainerProps = Omit<HTMLMotionProps<"div">, "className"> & {
    isVisible: boolean;
    makeInvisible: () => void;
    showOverlay?: boolean;
    direction?: "left" | "right";
};
//# sourceMappingURL=types.d.ts.map