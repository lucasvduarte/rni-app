import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Menu: undefined;
  Account: undefined;
  Notification: { data: any; isTechnicalVisit: boolean };
  NotificationDetails: undefined;
  Datasheet: undefined;
  DocumentProperty: undefined;
  Gallery: undefined;
  Progress: undefined;
  AppInformation: undefined;
  Comments: undefined;
  Details: undefined;
  ReferFriend: undefined;
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
