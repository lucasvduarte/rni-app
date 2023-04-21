import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: { code: string; cpfcnpj: string } | undefined;
  Register: undefined;
  ResetPassword: undefined;
  Welcome: undefined;
  NewPassword: { code: string; cpfcnpj: string };
  OtpPage: {
    headerTitle: string;
    cpfcnpj: string;
    navigate: "Login" | "NewPassword";
  };
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

export type NewPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  "NewPassword"
>;

export type OtpPageProps = NativeStackScreenProps<
  RootStackParamList,
  "OtpPage"
>;
