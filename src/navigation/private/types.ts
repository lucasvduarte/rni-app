import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TNotification } from "../../pages/notification/services/type";
import { TSearch } from "../../pages/attendance/service/Search/type";
import { TAttendance } from "../../pages/attendance/service/Attendance/type";
import { TDocument } from "../../pages/property/services/Document/type";
import { TExtratc } from "../../pages/financial/services/Financial/type";
import {
  TScheduling,
  TSchedulingResponse,
} from "../../pages/attendance/service/TechnicalAssistance/type";
import { TItem } from "../../redux/modules/auth/type";

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
  RegisterAttendance: undefined;
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
  ExtractDetails: { data: TExtratc };
  Constructions: undefined;
  Scheduling: { data: TAttendance };
  SatisfactionTechnicalAssistance: { data: TAttendance };
  SatisfactionAttendance: { data: TAttendance };
  Responsible: {
    data: TAttendance;
    dataScheduling?: TSchedulingResponse | undefined;
    schedulingDate?: TScheduling | undefined;
  };
  TechnicalAssistanceSection: undefined;
  TechnicalAssistanceItem: undefined;
  TechnicalAssistanceCategory: undefined;
  TechnicalAssistanceFiles: undefined;
  TechnicalAssistanceSummary: undefined;
  CopyDocumentPaymentSlip: undefined;
  SelectContract: {
    navigate: "AnticipationInformation" | "DischargeInformation";
  };
  AnticipationInformation: { data: TItem };
  AnticipationSimulation: { data: TItem };
  DischargeInformation: { data: TItem };
  DischargeSimulation: { data: TItem };
  Payments: { data: TItem; headerTitle: string };
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
  "ExtractDetails"
>;

export type SchedulingProps = NativeStackScreenProps<
  RootStackParamList,
  "Scheduling"
>;

export type SatisfactionTechnicalAssistanceProps = NativeStackScreenProps<
  RootStackParamList,
  "SatisfactionTechnicalAssistance"
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

export type CopyDocumentPaymentSlipProps = NativeStackScreenProps<
  RootStackParamList,
  "CopyDocumentPaymentSlip"
>;

export type SatisfactionAttendanceProps = NativeStackScreenProps<
  RootStackParamList,
  "SatisfactionAttendance"
>;

export type RegisterAttendanceProps = NativeStackScreenProps<
  RootStackParamList,
  "RegisterAttendance"
>;

export type SelectContractProps = NativeStackScreenProps<
  RootStackParamList,
  "SelectContract"
>;

export type AnticipationInformationProps = NativeStackScreenProps<
  RootStackParamList,
  "AnticipationInformation"
>;

export type AnticipationSimulationProps = NativeStackScreenProps<
  RootStackParamList,
  "AnticipationSimulation"
>;

export type DischargeInformationProps = NativeStackScreenProps<
  RootStackParamList,
  "DischargeInformation"
>;

export type DischargeSimulationProps = NativeStackScreenProps<
  RootStackParamList,
  "DischargeSimulation"
>;
export type PaymentsProps = NativeStackScreenProps<
  RootStackParamList,
  "Payments"
>;
