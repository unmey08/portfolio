import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import { Loader } from "./components";
import { Suspense } from "react";
import SinglePage from "./pages/SinglePage";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const darkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");

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
      className={`background-fade w-full no-scrollbar ${
        theme === "dark" ? "bg-[#1c1917]" : "bg-[#faf8f5]"
      }`}
    >
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
