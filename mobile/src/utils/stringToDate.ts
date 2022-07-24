export const stringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/')
  const stringFormated = `${year}-${month}-${day}T03:00:00`;
  return new Date(stringFormated);
}
