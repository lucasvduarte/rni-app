import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { RootStackParamList } from "./types";
import { HeaderRight, HeaderTitle } from "../../components";
import {
  Menu,
  Notification,
  NotificationDetails,
  MyAccount,
} from "../../pages";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PrivateNavigation = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.whiteBlack,
        },
      }}
      initialRouteName="Menu"
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="NotificationDetails"
        component={NotificationDetails}
        options={{
          headerTitle: "Detalhes do Caso",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
    </Stack.Navigator>
  );
};
