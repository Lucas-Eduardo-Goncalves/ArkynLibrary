import { AnimatePresence, motion } from "framer-motion";

import type { DrawerContainerProps } from "./types";
import { DrawerContainerContext } from "../_context";
import * as styles from "./styles.css";

export function DrawerContainer(props: DrawerContainerProps) {
  const {
    isVisible,
    makeInvisible,
    showOverlay = true,
    direction,
    ...rest
  } = props;
  const translateX = direction === "left" ? "-100%" : "100%";

  return (
    <DrawerContainerContext.Provider value={{ isVisible, makeInvisible }}>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              className={styles.container({ direction, showOverlay })}
              transition={{ ease: "easeOut", duration: 0.15 }}
              initial={{ transform: `translateX(${translateX})` }}
              animate={{ transform: "translateX(0px)" }}
              exit={{ transform: `translateX(${translateX})` }}
              {...rest}
            />

            {showOverlay && (
              <motion.div
                transition={{ duration: 0.15, ease: "easeOut" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={makeInvisible}
                className={styles.overlay}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </DrawerContainerContext.Provider>
  );
}
