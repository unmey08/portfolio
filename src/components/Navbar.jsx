import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { socialLinks } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation().pathname;

  const openMenu = () => {
    setIsMenuOpen((value) => !value);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.22, 0, 0.39, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const navVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div>
      <header className="header">
        <NavLink to="/" className="hidden md:block">
          <h1
            className={`text-2xl font-bold ${"blue-gradient_text"} font-poppins`}
          >
            UM
          </h1>
        </NavLink>
        <nav className="text-lg gap-7 font-medium hidden md:flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "text-black dark:text-gray-200 hover:text-blue-400 duration-100 hover:scale-x-105"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "text-black dark:text-gray-200 hover:text-blue-400 duration-100 hover:scale-x-105"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "text-black dark:text-gray-200 hover:text-blue-400 duration-100 hover:scale-x-105"
            }
          >
            Contact
          </NavLink>
        </nav>
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } md:hidden text-3xl flex justify-between gap-10 w-full`}
        >
          {!isMenuOpen && (
            <button
              className="duration-700 transition block"
              onClick={openMenu}
              aria-label="Menu"
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          )}
          {!isMenuOpen && theme === "light" && (
            <button onClick={() => setTheme("dark")} aria-label="Dark Theme">
              <ion-icon name="sunny-outline"></ion-icon>
            </button>
          )}
          {!isMenuOpen && theme === "dark" && (
            <button onClick={() => setTheme("light")} aria-label="Light Theme">
              <ion-icon name="moon-outline"></ion-icon>
            </button>
          )}
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`z-50 fixed w-full h-screen flex justify-center items-center ${
              theme === "dark"
                ? "bg-slate-950 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#313141,transparent)]"
                : "absolute inset-0 -z-10 bg-white [background:radial-gradient(135%_135%_at_50%_10%,#f1f5f9_20%,#93c5ff_100%)]"
            } dark:opacity-100 opacity-100 flex-col origin-top absolute`}
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="initial"
              className="text-white text-4xl font-semibold font-sans overflow-hidden"
            >
              <motion.div variants={navVars} initial="initial" animate="open">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 uppercase my-12 dark:blue-gradient_text"
                      : "text-black dark:text-white transition ease-out duration-500 block uppercase mb-12"
                  }
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={navVars} initial="initial" animate="open">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 uppercase my-12 dark:blue-gradient_text"
                      : "text-black dark:text-white transition ease-out  duration-500 block uppercase my-12"
                  }
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  About
                </NavLink>
              </motion.div>
              <motion.div variants={navVars} initial="initial" animate="open">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 uppercase my-12 dark:blue-gradient_text"
                      : "text-black dark:text-white transition ease-out  duration-500 block uppercase my-12"
                  }
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  Projects
                </NavLink>
              </motion.div>
              <motion.div variants={navVars} initial="initial" animate="open">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 uppercase my-12 dark:blue-gradient_text"
                      : "text-black dark:text-white transition ease-out duration-500 block uppercase my-12"
                  }
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  Contact Me
                </NavLink>
              </motion.div>
              <motion.div variants={navVars} initial="initial" animate="open">
                <Link
                  to={pdfFile}
                  target="_blank"
                  className="block mt-12 uppercase dark:text-white text-black"
                  download
                >
                  Resume
                </Link>
              </motion.div>
            </motion.div>
            <div className="mt-20 flex w-full justify-evenly text-3xl">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } hover:${item.className}`}
                  target="_blank"
                  to={item.link}
                  aria-label={item.name}
                >
                  <ion-icon name={item.iconUrl}></ion-icon>
                </Link>
              ))}
            </div>
            {isMenuOpen && (
              <button
                className={`block text-lg uppercase mt-12 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                onClick={openMenu}
              >
                Close
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
