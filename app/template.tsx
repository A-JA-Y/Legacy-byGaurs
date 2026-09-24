"use client";

import { useLayoutEffect, useRef } from "react";

// Re-mounts on every navigation. The first page load is left alone so the
// hero paints (and counts for LCP) immediately; later route changes fade in.
let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (hasMounted) ref.current?.classList.add("page-enter");
    hasMounted = true;
  }, []);

  return <div ref={ref}>{children}</div>;
}
