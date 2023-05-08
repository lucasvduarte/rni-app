import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TNotification } from "../../pages/notification/services/type";
import { TSearch } from "../../pages/attendance/service/Search/type";
import { TAttendance } from "../../pages/attendance/service/Attendance/type";
import { TDocument } from "../../pages/property/services/Document/type";
import { TExtratc } from "../../pages/financial/services/Financial/type";

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
  AttendanceDetails: { data: TAttendance };
  CommonQuestions: undefined;
  DocumentAttendance: undefined;
  Search: undefined;
  SearchDetails: { data: TSearch };
  TechnicalAssistance: undefined;
  TechnicalAssistanceDetails: { data: TAttendance };
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
