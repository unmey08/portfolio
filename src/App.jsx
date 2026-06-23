import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import { Loader } from "./components";
import { Suspense } from "react";
import SinglePage from "./pages/SinglePage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App = () => {
  const darkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");

  useEffect(() => {
    const loader = document.getElementById("app-loader");
    if (loader) {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 400);
    }
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <main
      id="main-content"
      className={`background-fade w-full no-scrollbar ${
        theme === "dark" ? "bg-[#1c1917]" : "bg-[#faf8f5]"
      }`}
    >
      <ScrollProgressBar />
      <Navbar theme={theme} setTheme={setTheme} />
      <SocialLinks theme={theme} page={"App"} />
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <SinglePage theme={theme} />
      </Suspense>
    </main>
  );
};

export default App;
