"use client";

import { useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

// Click-to-load YouTube film (lite-youtube-embed: privacy-enhanced
// youtube-nocookie player, no iframe cost until the visitor presses play).
/** @param {{ video: { id: string, title: string, channel: string, official?: boolean, language?: string }, eyebrow?: string }} props */
export default function YouTubeCard({ video, eyebrow }) {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);

  return (
    <figure className="group">
      <div className="guide-video relative aspect-video w-full overflow-hidden rounded-3xl bg-[#0F1535] ring-1 ring-[#DCA54A]/25 shadow-[0_40px_80px_-45px_rgba(15,21,53,0.8)] transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-35px_rgba(220,165,74,0.45)]">
        <lite-youtube
          videoid={video.id}
          playlabel={`Play: ${video.title}`}
          params="rel=0&modestbranding=1"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)` }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            className="lty-playbtn"
            title={`Play: ${video.title}`}
          >
            <span className="lyt-visually-hidden">Play: {video.title}</span>
          </a>
        </lite-youtube>
      </div>
      <figcaption className="mt-4 flex items-start gap-3">
        <FaYoutube aria-hidden="true" className="mt-0.5 shrink-0 text-xl text-[#C4302B]" />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8841e]">
            {eyebrow ?? (video.official ? "Official film" : "Explainer")}
            {video.language ? ` (${video.language})` : ""} · {video.channel}
          </p>
          <p className="mt-1 text-sm font-medium leading-snug text-[#141a3d]">{video.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}
