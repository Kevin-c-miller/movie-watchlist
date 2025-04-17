export const formatDate = (date) => {
  if (!date) return;

  const year = date?.slice(0, 4);
  const month = date?.slice(5, 7);
  const day = date?.slice(8, 10);
  const dayFormatted = day.startsWith('0') ? day.slice(1) : day;
  const monthFormatted = month.startsWith('0') ? month.slice(1) : month;
  return `${monthFormatted}/${dayFormatted}/${year}`;
};
