import Dates from "Constants/Language/Dates";

export const daysDiff = (start: Date, end: Date) => {
  const diffTime = Math.abs(start.getTime() - end.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formattedDiff = (
  start: Date,
  end: Date,
  language?: keyof typeof Dates
) => {
  const diffTime = Math.abs(start.getTime() - end.getTime());
  const daysDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const lang = Dates[language || "EN"];

  if (daysDiff / 30 >= 1) {
    if (Math.round(daysDiff / 30) !== 1) {
      return `${Math.round(daysDiff / 30)} ${lang.months.toLowerCase()}`;
    } else {
      return `${Math.round(daysDiff / 30)} ${lang.month.toLowerCase()}`;
    }
  } else if (daysDiff / 7 >= 1) {
    if (Math.round(daysDiff / 7) !== 1) {
      return `${Math.round(daysDiff / 7)} ${lang.weeks.toLowerCase()}`;
    } else {
      return `${Math.round(daysDiff / 7)} ${lang.week.toLowerCase()}`;
    }
  } else {
    if (daysDiff !== 1) return `${daysDiff} ${lang.days.toLowerCase()}`;
    else return `${daysDiff} ${lang.day.toLowerCase()}`;
  }
};
