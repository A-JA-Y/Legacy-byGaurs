"use client";

import { useEffect, useRef } from "react";

// Scroll-reveal wrapper: fades content up once it enters the viewport.
// Pairs with the .reveal / .reveal-visible classes in globals.css.
// variant: "up" (default) | "left" | "right" | "zoom" | "mask"
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div", style, variant = "up" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variant !== "up" ? `reveal-${variant}` : ""} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
