// Fixed full-viewport noise overlay. Adds a warm paper-like quality to the
// page. Hidden under `prefers-reduced-motion` via globals.css.
export function Grain() {
  return <div aria-hidden="true" className="grain-overlay" />;
}
