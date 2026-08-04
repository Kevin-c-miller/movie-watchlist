export const formatDatewithSlashes = (date) => {
  if (!date) return;

  const year = date?.slice(0, 4);
  const month = date?.slice(5, 7);
  const day = date?.slice(8, 10);
  const dayFormatted = day.startsWith("0") ? day.slice(1) : day;
  const monthFormatted = month.startsWith("0") ? month.slice(1) : month;
  return `${monthFormatted}/${dayFormatted}/${year}`;
};

export const formatDatewithDashes = (date) => {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");

  console.log(date, yyyy);
  return `${yyyy}-${mm}-${dd}`;
};
