export const getStyleForCellTable = (width) => {
  if (!width) return {};

  const resultWidth = typeof width === 'number'
    ? `${width}px`
    : width;

  return {
    width: resultWidth,
    minWidth: resultWidth,
    maxWidth: resultWidth,
  };
};
