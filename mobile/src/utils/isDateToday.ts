import { dateToString } from "./dateToString";

export const isDateToday = (dateString: string): boolean => {
  const curretDate = dateToString(new Date());
  return curretDate === dateString;
}
