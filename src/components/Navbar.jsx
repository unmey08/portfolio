import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { socialLinks } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.4, ease: [0.7, 0, 0.6, 1] } },
    exit: { scaleY: 0, transition: { duration: 0.4, ease: [0.62, 1, 0.6, 1] } },
  };

  const navVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.67, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.09, delayChildren: 0.3, staggerDirection: 1 } },
  };

  const ThemeToggle = ({ className = "" }) => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`text-2xl transition-colors ${
        theme === "dark" ? "text-white hover:text-[#3b9eff]" : "text-black hover:text-yellow-500"
      } ${className}`}
    >
      <ion-icon name={theme === "dark" ? "moon-outline" : "sunny-outline"}></ion-icon>
    </button>
  );

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf8f5]/80 dark:bg-[#1c1917]/85 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-700/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto flex justify-between items-center sm:px-16 px-8 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#hero"
            className="hidden md:flex items-center text-2xl font-bold group"
            aria-label="Home"
          >
            <span className="font-mono text-gray-400 dark:text-gray-500 transition-colors group-hover:text-[#0055cc] dark:group-hover:text-[#3b9eff]">
              &lt;
            </span>
            <span className="blue-gradient_text font-poppins px-0.5 tracking-tight">UM</span>
            <span className="font-mono text-gray-400 dark:text-gray-500 transition-colors group-hover:text-[#0055cc] dark:group-hover:text-[#3b9eff]">
              /&gt;
            </span>
          </a>

          <nav className="text-lg gap-7 font-medium hidden md:flex items-center">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative pb-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#0055cc] dark:text-[#3b9eff]"
                      : "text-black dark:text-gray-200 hover:text-[#0055cc] dark:hover:text-[#3b9eff]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-[#0055cc] dark:bg-[#3b9eff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <span className="w-px h-5 bg-stone-300 dark:bg-stone-600" />
            <ThemeToggle />
          </nav>

          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden text-3xl flex justify-between items-center gap-10 w-full`}
          >
            {!isMenuOpen && (
              <button className="duration-700 transition block" onClick={() => setIsMenuOpen(true)} aria-label="Menu">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            )}
            {!isMenuOpen && <ThemeToggle className="text-3xl" />}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`z-50 fixed w-full h-screen flex justify-center items-center flex-col origin-top ${
              theme === "dark" ? "bg-[#1c1917]" : "bg-[#f5f3ef]"
            }`}
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="text-4xl font-semibold font-sans overflow-hidden text-center"
            >
              <motion.div variants={navVars} initial="initial" animate="open">
                <a
                  href="#hero"
                  className="text-black dark:text-white block uppercase mb-12"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </motion.div>
              {NAV_LINKS.map(({ label, href }) => (
                <motion.div key={label} variants={navVars} initial="initial" animate="open">
                  <a
                    href={href}
                    className="text-black dark:text-white block uppercase my-12"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                </motion.div>
              ))}
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
                  className={`${theme === "dark" ? "text-white" : "text-black"} hover:${item.className}`}
                  target="_blank"
                  to={item.link}
                  aria-label={item.name}
                >
                  <ion-icon name={item.iconUrl}></ion-icon>
                </Link>
              ))}
            </div>

            <button
              className={`block text-lg uppercase mt-12 ${theme === "dark" ? "text-white" : "text-black"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
