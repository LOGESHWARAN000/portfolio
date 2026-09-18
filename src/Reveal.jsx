import { useEffect, useRef, useState } from "react";

/**
 * Reveal
 * Wraps its children and fades + slides them into view the first time
 * they scroll into the viewport. Uses the native IntersectionObserver
 * API — no extra libraries needed.
 *
 * Usage:
 *   <Reveal>
 *     <p>This fades in on scroll</p>
 *   </Reveal>
 *
 *   <Reveal delay={150}>  // optional stagger delay in ms
 *     <p>This fades in a little later</p>
 *   </Reveal>
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}