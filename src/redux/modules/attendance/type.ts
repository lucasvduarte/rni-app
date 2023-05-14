import {
  TCategory,
  TItem,
  TSection,
} from "../../../pages/attendance/service/TechnicalAssistance/type";

export type TTechnicalAssistance = {
  category?: TCategory;
  section?: TSection;
  listRegister: TListRegister[];
  files: any;
};

export type TListRegister = {
  category: TCategory;
  section: TSection;
  item: TItem;
};
