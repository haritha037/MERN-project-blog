export function formatDate(dateStr) {
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toString().slice(4, 15);
  return formattedDate;
}
