import { options } from "../constants/index";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Theme = ({ theme, setTheme }) => {
  return (
    <div
      className={`hidden md:fixed md:flex  md:flex-col xl:flex-row dark:bg-slate-800/95 rounded-lg border-solid bg-blue-300/20 ${
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
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 dark:text-white ${
              themeOption.text === "dark"
                ? "hover:text-blue-600 active:text-blue-600"
                : "hover:text-yellow-500 focus:text-yellow-500"
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
