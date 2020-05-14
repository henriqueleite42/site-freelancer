import AllLangs from "Constants/Language";

interface Date {
  day: string;
  days: string;
  week: string;
  weeks: string;
  month: string;
  months: string;
  year: string;
  years: string;
}

const EN = {
  day: "Day",
  days: "Days",
  week: "Week",
  weeks: "Weeks",
  month: "Month",
  months: "Months",
  year: "Year",
  years: "Years"
};

const BR = {
  day: "Dia",
  days: "Dias",
  week: "Semana",
  weeks: "Semanas",
  month: "Mês",
  months: "Meses",
  year: "Ano",
  years: "Anos"
};

const Dates: { [T in keyof typeof AllLangs]: Date } = {
  EN,
  BR
};

export default Dates;
