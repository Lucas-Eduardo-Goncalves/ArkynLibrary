import { AnimatePresence, motion } from "framer-motion";

import type { ModalContainerProps } from "./types";
import { ModalContainerContext } from "../_context";
import * as styles from "./styles.css";

export function ModalContainer(props: ModalContainerProps) {
  const {
    isVisible,
    makeInvisible,
    radii = "md",
    showOverlay = true,
    ...rest
  } = props;

  return (
    <ModalContainerContext.Provider value={{ isVisible, makeInvisible }}>
      <AnimatePresence>
        {isVisible && (
          <aside className={styles.container}>
            <motion.div
              transition={{ duration: 0.15, ease: "easeOut" }}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={styles.content({ radii })}
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
          </aside>
        )}
      </AnimatePresence>
    </ModalContainerContext.Provider>
  );
}
