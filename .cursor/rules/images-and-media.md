Images and Media

- Prefer vector assets (SVG) whenever possible.
- If raster is required, convert to modern formats: WebP or AVIF.
- Avoid PNG and JPEG for new assets unless there is a hard requirement.
- Optimize images before committing (resize, compress, strip metadata).
- Favor short, cacheable URLs in `public/` and reference via absolute paths.
- Videos: use MP4 (H.264/H.265) or WebM; set `controls`, provide a poster when useful.
- GIFs: prefer short MP4/WebM loops for better performance, or optimized animated WebP.
- Markdown embeds are allowed; ensure widths are responsive (our `.markdown` styles handle this).
