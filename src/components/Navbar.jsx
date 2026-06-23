import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { socialLinks } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";
import { smoothScrollTo } from "../utils/smoothScroll";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "contact"];
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

  // Escape key to close
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const close = () => {
    setIsMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    close();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) smoothScrollTo(el.offsetTop - 80, 900);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const menuVars = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
  };

  const navVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.67, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.09, delayChildren: 0.3, staggerDirection: 1 } },
  };

  const ThemeToggle = ({ className = "", showTooltip = false }) => {
    const goingDark = theme !== "dark";
    const label = goingDark ? "Switch to dark mode" : "Switch to light mode";
    const button = (
      <button
        onClick={toggleTheme}
        aria-label={label}
        className={`text-2xl transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055cc] dark:focus-visible:ring-[#3b9eff] ${
          theme === "dark" ? "text-white hover:text-yellow-500" : "text-black hover:text-[#3b9eff]"
        } ${className}`}
      >
        <ion-icon name={goingDark ? "moon-outline" : "sunny-outline"} aria-hidden="true"></ion-icon>
      </button>
    );

    if (!showTooltip) return button;

    return (
      <Tooltip
        content={label}
        className="bg-neutral-500 dark:bg-slate-700 px-3 py-1 shadow-xl shadow-black/10"
        animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}
      >
        {button}
      </Tooltip>
    );
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
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

          {/* Desktop nav */}
          <nav className="text-lg gap-7 font-medium hidden md:flex items-center">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative pb-1 transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055cc] dark:focus-visible:ring-[#3b9eff] ${
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
            <a
              href={pdfFile}
              download
              className="text-sm font-semibold px-4 py-1.5 rounded-full border border-[#0055cc]/40 dark:border-[#3b9eff]/40 text-[#0055cc] dark:text-[#3b9eff] hover:bg-[#0055cc] hover:text-white dark:hover:bg-[#3b9eff] dark:hover:text-[#1c1917] transition-colors duration-200"
            >
              Resume
            </a>
            <ThemeToggle showTooltip />
          </nav>

          {/* Mobile: logo left · theme + hamburger right */}
          <div className="md:hidden flex items-center gap-4 w-full justify-between">
            <a href="#hero" className="flex items-center text-xl font-bold group" aria-label="Home">
              <span className="font-mono text-gray-400 dark:text-gray-500 group-hover:text-[#0055cc] dark:group-hover:text-[#3b9eff] transition-colors">&lt;</span>
              <span className="blue-gradient_text font-poppins px-0.5 tracking-tight">UM</span>
              <span className="font-mono text-gray-400 dark:text-gray-500 group-hover:text-[#0055cc] dark:group-hover:text-[#3b9eff] transition-colors">/&gt;</span>
            </a>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                ref={hamburgerRef}
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className={`relative w-8 h-8 flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055cc] dark:focus-visible:ring-[#3b9eff] transition-colors ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90, scale: 0.7 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-3xl leading-none"
                  >
                    <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"} aria-hidden="true" />
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`z-40 fixed inset-0 flex flex-col justify-center items-center ${
              theme === "dark" ? "bg-[#1c1917]" : "bg-[#f5f3ef]"
            }`}
          >
            {/* Nav links */}
            <nav className="flex flex-col items-center gap-10 text-center">
              {[{ label: "Home", href: "#hero" }, ...NAV_LINKS].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                    theme === "dark"
                      ? "text-white hover:text-[#3b9eff]"
                      : "text-stone-800 hover:text-[#0055cc]"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href={pdfFile}
                download
                onClick={close}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0055cc] dark:border-[#3b9eff] text-[#0055cc] dark:text-[#3b9eff] text-lg font-semibold hover:bg-[#0055cc] hover:text-white dark:hover:bg-[#3b9eff] dark:hover:text-[#1c1917] transition-colors duration-200"
              >
                <ion-icon name="download-outline" aria-hidden="true" />
                Resume
              </a>
            </nav>

            {/* Divider */}
            <div className="mt-12 w-12 h-px bg-stone-300 dark:bg-stone-600" />

            {/* Social icons */}
            <div className="mt-8 flex gap-8 text-2xl">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  onClick={close}
                  className={`transition-colors duration-200 ${
                    theme === "dark"
                      ? "text-stone-400 hover:text-[#3b9eff]"
                      : "text-stone-500 hover:text-[#0055cc]"
                  }`}
                >
                  <ion-icon name={item.iconUrl} aria-hidden="true"></ion-icon>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
