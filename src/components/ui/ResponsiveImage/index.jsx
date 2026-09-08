export default function ResponsiveImage({
  image,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority = 'auto',
  style,
}) {
  return (
    <picture className="contents">
      {image.avifSrcSet ? (
        <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      ) : null}
      {image.webpSrcSet ? (
        <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      ) : null}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt ?? image.alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  );
}
