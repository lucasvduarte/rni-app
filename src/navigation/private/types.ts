import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TNotification } from "../../pages/notification/services/type";
import { TSearch } from "../../pages/attendance/service/Search/type";
import { TAttendance } from "../../pages/attendance/service/Attendance/type";
import { TDocument } from "../../pages/property/services/Document/type";
import { TExtratc } from "../../pages/financial/services/Financial/type";
import {
  TCategory,
  TSection,
} from "../../pages/attendance/service/TechnicalAssistance/type";

export type RootStackParamList = {
  Menu: undefined;
  AccountMenu: undefined;
  PolicyAndPrivacy: undefined;
  Notification: { data: any; isTechnicalVisit: boolean };
  NotificationDetails: { notification: TNotification };
  Datasheet: undefined;
  DocumentProperty: undefined;
  Gallery: undefined;
  Progress: undefined;
  AppInformation: undefined;
  ReferAndWin: undefined;
  BlogRni: undefined;
  Video: undefined;
  DocumentFinancing: undefined;
  Step: undefined;
  TipsFinancing: undefined;
  Attendance: undefined;
  AttendanceConcluded: { data: TAttendance[] };
  AttendanceDetails: { data: TAttendance; isConcluded: boolean };
  CommonQuestions: undefined;
  DocumentAttendance: undefined;
  Search: undefined;
  SearchDetails: { data: TSearch };
  TechnicalAssistance: undefined;
  TechnicalAssistanceConcluded: { data: TAttendance[] };
  TechnicalAssistanceDetails: { data: TAttendance; isConcluded: boolean };
  DocumentDetailsProperty: { data: TDocument };
  Profile: undefined;
  RedefinePassword: undefined;
  NotificationAuthorization: undefined;
  PaymentSlipAuthorization: undefined;
  SharingAuthorization: undefined;
  ChangeEmail: undefined;
  Contacts: undefined;
  PaymentInfo: undefined;
  Extract: undefined;
  ExtractDatails: { data: TExtratc };
  Constructions: undefined;
  Scheduling: { data: any };
  Satisfaction: { data: any } | undefined;
  Responsible: { data: any } | undefined;
  TechnicalAssistanceSection: undefined;
  TechnicalAssistanceItem: undefined;
  TechnicalAssistanceCategory: undefined;
  TechnicalAssistanceFiles: undefined;
  TechnicalAssistanceSummary: undefined;
};

export type MenuProps = NativeStackScreenProps<RootStackParamList, "Menu">;

export type AccountMenuProps = NativeStackScreenProps<
  RootStackParamList,
  "AccountMenu"
>;

export type NotificationProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export type NotificationDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "NotificationDetails"
>;

export type SearchProps = NativeStackScreenProps<RootStackParamList, "Search">;

export type SearchDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "SearchDetails"
>;

export type AttendanceProps = NativeStackScreenProps<
  RootStackParamList,
  "Attendance"
>;

export type AttendanceDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "AttendanceDetails"
>;

export type TechnicalAssistanceProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistance"
>;

export type DocumentAttendanceProps = NativeStackScreenProps<
  RootStackParamList,
  "DocumentAttendance"
>;
export type DocumentDetailsPropertyProps = NativeStackScreenProps<
  RootStackParamList,
  "DocumentDetailsProperty"
>;
export type DocumentPropertyProps = NativeStackScreenProps<
  RootStackParamList,
  "DocumentProperty"
>;

export type TechnicalAssistanceDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceDetails"
>;

export type ExtractProps = NativeStackScreenProps<
  RootStackParamList,
  "Extract"
>;

export type ExtractDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "ExtractDatails"
>;

export type SchedulingProps = NativeStackScreenProps<
  RootStackParamList,
  "Scheduling"
>;

export type SatisfactionProps = NativeStackScreenProps<
  RootStackParamList,
  "Satisfaction"
>;

export type ResponsibleProps = NativeStackScreenProps<
  RootStackParamList,
  "Responsible"
>;

export type TechnicalAssistanceSectionProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceSection"
>;

export type TechnicalAssistanceItemProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceItem"
>;

export type TechnicalAssistanceCategoryProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceCategory"
>;
export type TechnicalAssistanceFilesProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceFiles"
>;
export type TechnicalAssistanceSummaryProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceSummary"
>;

export type TechnicalAssistanceConcludedProps = NativeStackScreenProps<
  RootStackParamList,
  "TechnicalAssistanceConcluded"
>;

export type AttendanceConcludedProps = NativeStackScreenProps<
  RootStackParamList,
  "AttendanceConcluded"
>;
