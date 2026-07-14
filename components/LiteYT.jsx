"use client";

import "lite-youtube-embed";
import { brand } from "@/data/brand";

export default function LiteYT() {
  if (!brand.youtubeId) return null;

  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={brand.youtubeId}
        playlabel={`${brand.name} walkthrough`}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
