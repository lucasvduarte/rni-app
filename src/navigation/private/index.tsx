import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { RootStackParamList } from "./types";
import { HeaderRight, HeaderTitle } from "../../components";
import {
  Menu,
  Notification,
  NotificationDetails,
  AccountMenu,
  PolicyAndPrivacy,
  AppInformation,
  Comments,
  Datasheet,
  Details,
  DocumentProperty,
  Gallery,
  Progress,
  ReferAndWin,
  Tendencies,
  TipsService,
  Video,
  DocumentFinancing,
  Step,
  TipsFinancing,
} from "../../pages";
import { HeaderRightMenu } from "../../components/Header";

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
          headerRight: () => <HeaderRightMenu />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: "Notificações",
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
          headerTitle: "Detalhes da notificações",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="AccountMenu"
        component={AccountMenu}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="PolicyAndPrivacy"
        component={PolicyAndPrivacy}
        options={{
          headerTitle: "Política de privacidade",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />

      <Stack.Screen
        name="AppInformation"
        component={AppInformation}
        options={{
          headerTitle: "Informações de Apps",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          headerTitle: "Comentários",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Datasheet"
        component={Datasheet}
        options={{
          headerTitle: "Ficha Técnica",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="DocumentProperty"
        component={DocumentProperty}
        options={{
          headerTitle: "Manuais e Documentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerTitle: "Fotos da Obra",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Progress"
        component={Progress}
        options={{
          headerTitle: "Andamento da Obra",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="ReferAndWin"
        component={ReferAndWin}
        options={{
          headerTitle: "Indique e Ganhe",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Tendencies"
        component={Tendencies}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TipsService"
        component={TipsService}
        options={{
          headerTitle: "Minha Conta",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerTitle: "Vídeos e Tutoriais",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="DocumentFinancing"
        component={DocumentFinancing}
        options={{
          headerTitle: "Documentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Step"
        component={Step}
        options={{
          headerTitle: "Passoa a passo",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TipsFinancing"
        component={TipsFinancing}
        options={{
          headerTitle: "Dicas",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
    </Stack.Navigator>
  );
};
