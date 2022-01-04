export const getFontSize = (
  target: HTMLElement | null,
  scale: number,
): string => {
  const defaultValue = 16;
  const defaultFontSize =
    target?.style.fontSize.replace(/\d/gi, '') || defaultValue;
  return +defaultFontSize * scale + 'px';
};
