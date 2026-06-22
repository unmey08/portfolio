import { options } from "../constants/index";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Theme = ({ theme, setTheme }) => {
  return (
    <div
      className={`hidden md:fixed z-40 md:flex  md:flex-col xl:flex-row dark:bg-[#292524]/95 rounded-lg border border-stone-200 dark:border-stone-700 border-solid bg-white/80 backdrop-blur-sm ${
        window.innerWidth > 1280 ? "right-10 top-2" : "left-0 bottom-2"
      }`}
    >
      {options.map((themeOption) => (
        <Tooltip
          content={themeOption.uiText}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          className="bg-neutral-500 dark:bg-slate-700"
          key={themeOption.id}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 dark:text-white transition-colors ${
              themeOption.text === "light"
                ? theme === "light"
                  ? "text-yellow-500"
                  : "hover:text-yellow-500"
                : theme === "dark"
                ? "text-[#3b9eff]"
                : "hover:text-[#3b9eff]"
            } `}
            onClick={() => setTheme(themeOption.text)}
            aria-label={themeOption.uiText}
          >
            <ion-icon name={themeOption.icon}></ion-icon>
          </motion.button>
        </Tooltip>
      ))}
    </div>
  );
};

export default Theme;
