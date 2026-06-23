import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#0086e6] to-[#0055cc]"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
};

export default ScrollProgressBar;
