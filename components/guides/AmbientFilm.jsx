"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

// Muted background film for the guide heroes. It never autoplays from the
// markup: playback starts from JS so reduced-motion and data-saver visitors
// keep the still poster, and it pauses whenever it is scrolled out of view.
// The pause control satisfies WCAG 2.2.2 for moving content over 5 seconds.
/**
 * @param {{ webm: string, mp4: string, label?: string, poster?: import("react").ReactNode,
 *   overlay?: import("react").ReactNode, parallax?: string }} props
 */
// Renders the whole media layer — poster, film, legibility overlay — and puts
// the pause control at section level so it stays above the hero content.
export default function AmbientFilm({ webm, mp4, label = "Background film", poster = null, overlay = null, parallax = "0.12" }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle | playing | paused
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ""));
    if (reduced || slow) return;

    const onPlaying = () => setState("playing");
    video.addEventListener("playing", onPlaying);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);

    return () => {
      io.disconnect();
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
      setState("playing");
    } else {
      userPaused.current = true;
      video.pause();
      setState("paused");
    }
  };

  return (
    <>
      <div className="absolute inset-0 -z-10" data-parallax={parallax}>
        {poster}
        <video
          ref={ref}
          className={`guide-film absolute inset-0 h-full w-full object-cover ${state !== "idle" ? "is-playing" : ""}`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      {overlay}

      {state !== "idle" ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={state === "playing" ? `Pause ${label}` : `Play ${label}`}
          className="absolute bottom-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white/85 backdrop-blur-md transition hover:bg-black/40 hover:text-white"
        >
          {state === "playing" ? <FaPause size={11} /> : <FaPlay size={11} className="ml-0.5" />}
        </button>
      ) : null}
    </>
  );
}
