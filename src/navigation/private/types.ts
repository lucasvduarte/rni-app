import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TNotification } from "../../pages/notification/services/type";
import { TSearch } from "../../pages/attendance/service/Search/type";
import { TAttendance } from "../../pages/attendance/service/Attendance/type";
import { TDocument } from "../../pages/property/services/Document/type";

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
  Comments: undefined;
  Details: undefined;
  ReferAndWin: undefined;
  Tendencies: undefined;
  TipsService: undefined;
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

export type TechnicalAssistanceProps = NativeStackScreenProps<
  RootStackParamList,
  "Attendance"
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
