export const formatDatePtBr = (date: string | Date) => {
  return date
    .toString()
    .split(" ")[0]
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");
};
