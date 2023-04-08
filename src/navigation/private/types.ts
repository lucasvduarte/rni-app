import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Menu: undefined;
  MyAccount: undefined;
  Notification: { data: any; isTechnicalVisit: boolean };
  NotificationDetails: undefined;
};

export type MenuProps = NativeStackScreenProps<RootStackParamList, "Menu">;

export type MyAccountProps = NativeStackScreenProps<
  RootStackParamList,
  "MyAccount"
>;

export type NotificationProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export type NotificationDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "NotificationDetails"
>;
