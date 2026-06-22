import { socialLinks } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialLinks = ({ theme, page }) => {
  return (
    <div
      className={`${
        page === "Home" && window.innerWidth < 768
          ? "flex flex-row text-4xl mt-8 space-x-6"
          : "hidden md:fixed z-40 top-1/2 -translate-y-1/2 left-0 duration-400 rounded-r-lg md:flex border-solid bg-white/80 dark:bg-[#292524]/95 backdrop-blur-sm flex-col text-4xl py-6 px-3 gap-1 shadow-lg border border-stone-200 dark:border-stone-700"
      }`}
    >
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          className={`${
            theme === "dark"
              ? "text-white/80 hover:text-[#3b9eff]"
              : "text-slate-700 hover:text-[#0055cc]"
          } mb-3 last:mb-0 transition ease-in`}
          target="_blank"
          to={item.link}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.4, ease: "easeIn" },
          }}
          aria-label={item.name}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ion-icon name={item.iconUrl}></ion-icon>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
