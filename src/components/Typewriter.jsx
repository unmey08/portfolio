import { useState, useEffect } from "react";

const Typewriter = ({
  phrases = [],
  typingSpeed = 90,
  deletingSpeed = 40,
  pauseTime = 1600,
  className = "",
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
};

export default Typewriter;
