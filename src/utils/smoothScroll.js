export const smoothScrollTo = (targetY, duration = 1200) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    window.scrollTo(0, targetY);
    return;
  }

  const step = (timestamp) => {
    if (start === null) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
