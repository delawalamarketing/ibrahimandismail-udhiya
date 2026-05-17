"use client";

import * as React from "react";

// Hairline scroll-progress indicator at the very top of the viewport. Tied to
// real scroll position, in `accent-500`. Hidden under reduced motion.
export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent-500 motion-reduce:hidden"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
