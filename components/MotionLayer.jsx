"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Site-wide motion engine. Server components opt in with data attributes, so
// no page needs to become a client component just to animate:
//
//   data-reveal="up|left|right|zoom|mask|fade"  scroll-in entrance
//   data-reveal-delay="120"                       entrance delay (ms)
//   data-stagger="80"                             staggers [data-reveal] children
//   data-parallax="0.12"                          scroll parallax (fraction of travel)
//   data-count                                    counts up the number in its text
//   data-tilt                                     3D tilt toward the pointer
//   data-magnetic                                 element leans toward the pointer
//
// Everything is skipped under prefers-reduced-motion; tilt, magnetic and the
// cursor are skipped on touch devices.

const COUNT_DURATION = 1800;

function countUp(el) {
  const original = el.textContent || "";
  const match = original.match(/[\d,.]+/);
  if (!match) return;
  const raw = match[0];
  const target = parseFloat(raw.replace(/,/g, ""));
  if (!isFinite(target)) return;

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const useCommas = raw.includes(",");
  const [before, after] = [original.slice(0, match.index), original.slice(match.index + raw.length)];
  const format = (n) => {
    const fixed = n.toFixed(decimals);
    return useCommas ? Number(fixed).toLocaleString("en-IN", { minimumFractionDigits: decimals }) : fixed;
  };

  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / COUNT_DURATION, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = before + format(target * eased) + after;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
}

export default function MotionLayer() {
  const pathname = usePathname();
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reveal, count-up and parallax registration — re-run per route, and watch
  // for lazily rendered sections via MutationObserver.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    const reveal = (el) => {
      const delay = Number(el.getAttribute("data-reveal-delay")) || 0;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("is-in");
      // Once the entrance has played, drop the reveal styles so the
      // element's own hover transitions (and tilt) take over again.
      setTimeout(() => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-in");
        el.style.transitionDelay = "";
      }, delay + 1300);
    };

    // A fully clip-path'd element never reports as intersecting, so "mask"
    // reveals are triggered by their parent instead.
    const proxied = new Map();

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          revealIO.unobserve(target);
          const masked = proxied.get(target);
          if (masked) {
            proxied.delete(target);
            masked.forEach(reveal);
          }
          const kind = target.getAttribute("data-reveal");
          if (kind && kind !== "mask" && !target.classList.contains("is-in")) reveal(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target);
          countIO.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    const parallaxEls = new Set();

    const register = (scope) => {
      scope.querySelectorAll("[data-stagger]:not([data-motion-done])").forEach((group) => {
        group.setAttribute("data-motion-done", "");
        const step = Number(group.getAttribute("data-stagger")) || 80;
        group.querySelectorAll(":scope > [data-reveal]").forEach((child, i) => {
          if (!child.hasAttribute("data-reveal-delay")) {
            child.setAttribute("data-reveal-delay", String(Math.min(i * step, 600)));
          }
        });
      });

      scope.querySelectorAll("[data-reveal]:not([data-motion-done])").forEach((el) => {
        el.setAttribute("data-motion-done", "");
        if (reduced) {
          el.classList.add("is-in");
        } else if (el.getAttribute("data-reveal") === "mask" && el.parentElement) {
          const host = el.parentElement;
          if (!proxied.has(host)) proxied.set(host, []);
          proxied.get(host).push(el);
          revealIO.observe(host);
        } else {
          revealIO.observe(el);
        }
      });

      if (!reduced) {
        scope.querySelectorAll("[data-count]:not([data-motion-done])").forEach((el) => {
          el.setAttribute("data-motion-done", "");
          countIO.observe(el);
        });
        scope.querySelectorAll("[data-parallax]").forEach((el) => parallaxEls.add(el));
      }
    };

    register(document);
    root.classList.add("motion-ready");

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) register(node.parentElement || node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Parallax loop — only runs while scrolling.
    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        if (!el.isConnected) {
          parallaxEls.delete(el);
          return;
        }
        const host = el.parentElement || el;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.12;
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };
    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      updateParallax();
    }

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Scroll progress bar + back-to-top visibility.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
        setProgress(p);
        setShowTop(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Pointer effects: tilt, magnetic buttons and the gold cursor ring.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-cursor");
    const ring = ringRef.current;
    const dot = dotRef.current;
    let mx = -100, my = -100, rx = -100, ry = -100;
    let raf = 0;
    let activeTilt = null;
    let activeMagnet = null;

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const resetTilt = () => {
      if (activeTilt) activeTilt.style.transform = "";
      activeTilt = null;
    };
    const resetMagnet = () => {
      if (activeMagnet) activeMagnet.style.transform = "";
      activeMagnet = null;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      const target = e.target instanceof Element ? e.target : null;
      const interactive = target?.closest("a, button, [role='button'], input, select, textarea, label, [data-tilt]");
      ring?.classList.toggle("cursor-hover", Boolean(interactive));

      const tilt = target?.closest("[data-tilt]");
      if (tilt !== activeTilt) resetTilt();
      if (tilt) {
        activeTilt = tilt;
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-4px)`;
        tilt.style.setProperty("--glare-x", `${((px + 0.5) * 100).toFixed(1)}%`);
        tilt.style.setProperty("--glare-y", `${((py + 0.5) * 100).toFixed(1)}%`);
      }

      const magnet = target?.closest("[data-magnetic]");
      if (magnet !== activeMagnet) resetMagnet();
      if (magnet) {
        activeMagnet = magnet;
        const r = magnet.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        magnet.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`;
      }
    };

    const onLeave = () => {
      mx = my = -100;
      resetTilt();
      resetMagnet();
    };
    const onDown = () => ring?.classList.add("cursor-down");
    const onUp = () => ring?.classList.remove("cursor-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const circumference = 2 * Math.PI * 20;

  return (
    <>
      {/* Reading progress */}
      <div className="scroll-progress" aria-hidden="true">
        <div ref={barRef} className="scroll-progress-fill" />
      </div>

      {/* Cursor */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />

      {/* Back to top with progress ring */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(196,154,43,0.2)" strokeWidth="2" />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#C49A2B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            transform="rotate(-90 24 24)"
          />
          <path d="M24 31V17M18 23l6-6 6 6" stroke="#1A2352" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
