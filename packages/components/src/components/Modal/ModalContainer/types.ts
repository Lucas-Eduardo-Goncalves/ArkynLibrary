import { HTMLMotionProps } from "framer-motion";

export type ModalContainerProps = Omit<HTMLMotionProps<"div">, "className"> & {
  isVisible: boolean;
  makeInvisible: () => void;
  showOverlay?: boolean;
  radii?: "unset" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};
