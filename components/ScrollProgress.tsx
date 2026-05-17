"use client";

import * as React from "react";

// Hairline scroll-progress indicator at the very top of the viewport. Tied to
// real scroll position, in `accent-500`. Hidden under reduced motion.
//
// Writes scaleX directly to the DOM via a ref + requestAnimationFrame so we
// don't trigger React re-renders on every scroll tick.
export function ScrollProgress() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let ticking = false;
    const update = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const total = h.scrollHeight - h.clientHeight;
        const progress = total > 0 ? window.scrollY / total : 0;
        if (ref.current) {
          ref.current.style.transform = `scaleX(${progress})`;
        }
        ticking = false;
      });
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
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent-500 motion-reduce:hidden"
      style={{ transform: "scaleX(0)", willChange: "transform" }}
    />
  );
}
