import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TNotification } from "../../pages/notification/services/type";

export type RootStackParamList = {
  Menu: undefined;
  Account: undefined;
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
};

export type MenuProps = NativeStackScreenProps<RootStackParamList, "Menu">;

export type AccountProps = NativeStackScreenProps<
  RootStackParamList,
  "Account"
>;

export type NotificationProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export type NotificationDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "NotificationDetails"
>;
