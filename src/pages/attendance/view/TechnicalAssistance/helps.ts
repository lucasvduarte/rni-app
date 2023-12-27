import { formatDatePtBr } from "../../../../config/utils";
import { TAttendance } from "../../service/Attendance/type";
import { TScheduling } from "../../service/TechnicalAssistance/type";

export const formatList = (value: TAttendance[] | undefined) => {
  if (!value) {
    return [];
  }
  return value.filter(
    (item) =>
      item.assunto_portal__c !== "Assistência Técnica - Pesquisa Satisfação" &&
      item.assunto_portal__c === "Assistência Técnica"
  );
};

export const searchDate = (date: string, listDates?: TScheduling[]) => {
  if (!listDates?.length) {
    return [];
  }
  return listDates.filter(
    (item) => formatDatePtBr(item.startTime, true) === date
  );
};
