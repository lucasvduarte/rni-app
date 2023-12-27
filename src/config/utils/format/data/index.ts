//import { utcToZonedTime } from "date-fns-tz";

type TDate = string | Date | undefined;

export const formatDatePtBr = (date: TDate, defaultDate?: boolean) => {
  if (!date) {
    return "";
  }

  if (typeof date !== "string" && defaultDate) {
    return date.toLocaleString().split(" ")[0].split("/").reverse().join("-");
  }

  if (typeof date !== "string") {
    return date.toLocaleString().split(" ")[0];
  }

  if (defaultDate) {
    return date.toString().split(" ")[0].split("T")[0];
  }

  return date
    .toString()
    .split(" ")[0]
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");
};

export const formatDatePtBrHr = (date: TDate, prefix?: string) => {
  if (!date) {
    return "";
  }

  const hr = date.toString().split(" ")[0].split("T")[1].split(":");

  return (
    date.toString().split(" ")[0].split("T")[0].split("-").reverse().join("/") +
    " " +
    (prefix || "") +
    " " +
    hr[0] +
    ":" +
    hr[1]
  );
};

export const formatHr = (date: TDate) => {
  if (!date) {
    return "";
  }
  const hours = formatTimeZoneSaoPaulo(date).getHours();
  const minutes = formatTimeZoneSaoPaulo(date).getMinutes();
  return (
    `00${hours}`.slice(-2) +
    ":" +
    `00${minutes}`.slice(-2) +
    `${hours >= 12 ? " PM" : " AM"}`
  );
};

export const addDays = (date: TDate, days: number, defaultDate?: boolean) => {
  if (!date) {
    return "";
  }

  const dateAux = formatTimeZoneSaoPaulo(formatDatePtBr(date, true));
  dateAux.setDate(dateAux.getDate() + days + 1);
  return formatDatePtBr(dateAux, defaultDate);
};

export const comparatorDate = (a: TDate, b: TDate) => {
  if (!a || !b) {
    return 0;
  }
  if (new Date(a) > new Date(b)) {
    return 1;
  }
  if (new Date(a) < new Date(b)) {
    return -1;
  }
  // a must be equal to b
  return 0;
};

const formatTimeZoneSaoPaulo = (date: string | number | Date) => {
  return new Date(date); //utcToZonedTime(date, "America/Sao_Paulo");
};

export const formatDateCurrent = (defaultDate?: boolean) => {
  return formatDatePtBr(new Date(), defaultDate);
};
