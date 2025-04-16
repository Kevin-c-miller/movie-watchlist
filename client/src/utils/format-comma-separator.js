export const showCommaSeparator = (array, index) => {
  const isLastItem = index === array.length - 1;

  return !isLastItem ? ',' : '';
};
