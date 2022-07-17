export const dateToString = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;
}

export const dateFullToString = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}
