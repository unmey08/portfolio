import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import { useState, useEffect, lazy, Suspense } from "react";
import SocialLinks from "./components/SocialLinks";
import { AnimatePresence } from "framer-motion";
import { Loader, Particle } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");
  const element = document.documentElement;
  const location = useLocation();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setTheme("light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <main
      className={`background-fade h-fit dark:h-fit w-full no-scrollbar ${
        theme === "dark"
          ? "bg-slate-950 absolute bottom-0 left-0 right-0 top-0 dark:bg-gradient-to-br dark:from-gray-800 dark:to-slate-950"
          : "absolute top-0 z-[-2] bg-gradient-to-br from-blue-100 to-slate-100"
      } `}
    >
      <ScrollToTop />
      <Particle />
      <Navbar theme={theme} setTheme={setTheme} />
      <Theme theme={theme} setTheme={setTheme} />
      <SocialLinks theme={theme} page={"App"} />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home theme={theme} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About theme={theme} />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact theme={theme} />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Loader />}>
                <Projects theme={theme} />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <ScrollToTopButton />
    </main>
  );
};

export default App;
