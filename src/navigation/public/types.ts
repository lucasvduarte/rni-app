import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Welcome: undefined;
  OtpPage: { headerTitle: string; cpfcnpj: string };
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export type RegisterProps = NativeStackScreenProps<
  RootStackParamList,
  "Register"
>;

export type ResetPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  "ResetPassword"
>;

export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;

export type OtpPageProps = NativeStackScreenProps<
  RootStackParamList,
  "OtpPage"
>;
