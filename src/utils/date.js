import { isAfter, subDays, startOfToday, addDays, format } from "date-fns";

export const getDateStr = (date) => {
  return format(date, "yyyy-MM-dd");
};

export const getDatePlusDaysStr = (dayCount) => {
  const today = new Date();
  const futureDate = addDays(today, dayCount);
  return format(futureDate, "yyyy-MM-dd");
};

export const isDateAfterYesterday = (date) => {
  const today = startOfToday();
  const yesterday = subDays(today, 0);
  return isAfter(date, yesterday);
};
