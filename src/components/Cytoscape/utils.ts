export function safeDrawImage(
  context: any,
  img: any,
  ix: number,
  iy: number,
  iw: number,
  ih: number,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  // const r = this;

  // detect problematic cases for old browsers with bad images (cheaper than try-catch)
  if (iw <= 0 || ih <= 0 || w <= 0 || h <= 0 || !img || !img.width || !img.height) {
    return;
  }

  context.drawImage(img, ix, iy, iw, ih, x, y, w, h);
}
