import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { RootStackParamList } from "./types";
import { Welcome, Login, Register, ResetPassword, OtpPage } from "../../pages";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PublicNavigation = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.whiteBlack,
        },
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Meu primeiro acesso",
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerTitle: "Redefinir senha",
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="OtpPage"
        component={OtpPage}
        options={{
          headerTitle: "Verificação de codigo",
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
    </Stack.Navigator>
  );
};
