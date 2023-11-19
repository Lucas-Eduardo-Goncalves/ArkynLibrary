import type { Dispatch, RefObject } from "react";

type InitialPositionProps =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right"
  | "top"
  | "left"
  | "bottom"
  | "right";

type CalcPositionProps = {
  initialPosition: InitialPositionProps;
  popoverContentRef: RefObject<HTMLDivElement>;
  setDirection: Dispatch<React.SetStateAction<InitialPositionProps>>;
};

export function calcPosition({
  initialPosition,
  popoverContentRef,
  setDirection,
}: CalcPositionProps) {
  if (!popoverContentRef.current) return;
  const popoverW = popoverContentRef.current.clientWidth;
  const popoverH = popoverContentRef.current.clientHeight;

  const windowWidth = window.visualViewport?.width || 0;
  const windowHeight = window.visualViewport?.height || 0;

  const position = popoverContentRef.current.getBoundingClientRect();

  switch (initialPosition) {
    case "top":
      if (popoverH > position.bottom) setDirection("bottom");
      break;
    case "right":
      const rMinus = windowWidth - position.left;
      if (popoverW > rMinus) setDirection("left");
      break;
    case "bottom":
      const bMinus = windowHeight - position.top;
      if (bMinus < popoverH) setDirection("top");
      break;
    case "left":
      if (popoverW > position.right || position.right < 0)
        setDirection("right");
      break;
    case "top-left":
      if (popoverH > position.bottom) setDirection("bottom-left");
      break;
    case "top-right":
      if (popoverH > position.bottom) setDirection("bottom-right");
      break;
    case "bottom-left":
      const blMinus = windowHeight - position.top;
      if (blMinus < popoverH) setDirection("top-left");
      break;
    case "bottom-right":
      const brMinus = windowHeight - position.top;
      if (brMinus < popoverH) setDirection("top-right");
      break;
  }
}
