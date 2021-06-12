export const sppx = (value: number) => `calc(${value} / 375 * 100vw)`;
export const pcpx = (value: number) =>
  value < 0
    ? `max(${value} / 1600 * 100vw, 1920px / 1600 * ${value})`
    : `min(${value} / 1600 * 100vw, 1920px / 1600 * ${value})`;
export const pcfz = (value: number) =>
  `clamp(12px, ${value} / 1600 * 100vw, 1920px / 1600 * ${value})`;
