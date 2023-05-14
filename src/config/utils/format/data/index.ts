export const formatDatePtBr = (date: string | Date | undefined) => {
  if (!date) {
    return "";
  }

  if (typeof date !== "string") {
    return date.toLocaleString().split(" ")[0];
  }

  return date
    .toString()
    .split(" ")[0]
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");
};

export const formatDatePtBrHr = (
  date: string | Date | undefined,
  prefix?: string
) => {
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
