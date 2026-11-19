// Responsive WebP with a real srcset. The site is a static export with
// `images.unoptimized`, so next/image would ship the full-size file to every
// screen; this serves the 960w file to phones and the 2400w file to large or
// high-density displays.
/** @param {{ media: any, sizes?: string, className?: string, priority?: boolean, alt?: string, [key: string]: any }} props */
export default function GuidePicture({
  media,
  sizes = "100vw",
  className = "",
  priority = false,
  alt,
  ...rest
}) {
  const { sm, lg } = media;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={lg.src}
      srcSet={`${sm.src} ${sm.width}w, ${lg.src} ${lg.width}w`}
      sizes={sizes}
      width={lg.width}
      height={lg.height}
      alt={alt ?? media.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      className={className}
      {...rest}
    />
  );
}
