import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { smoothScrollTo } from "../utils/smoothScroll";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0 z-30">
          <motion.button
            key="scroll-top"
            aria-label="Scroll to top"
            onClick={() => smoothScrollTo(0, 900)}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
              border border-stone-200 dark:border-stone-700
              bg-white/80 dark:bg-[#292524]/90 backdrop-blur-md
              text-[#0055cc] dark:text-[#3b9eff] text-xl shadow-lg
              hover:bg-[#0055cc] hover:text-white hover:border-transparent
              dark:hover:bg-[#3b9eff] dark:hover:text-[#1c1917]
              transition-colors duration-300"
          >
            <ion-icon name="arrow-up-outline" aria-hidden="true" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
