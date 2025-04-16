export const formatDate = (date) => {
  const newDate = date.split('-');
  const year = newDate[0];
  const month = newDate[1];
  const day = newDate[2];

  const dayFormatted = day.startsWith('0') ? day.slice(1) : day;
  const monthFormatted = month.startsWith('0') ? month.slice(1) : month;

  return `${monthFormatted}/${dayFormatted}/${year}`;
};
