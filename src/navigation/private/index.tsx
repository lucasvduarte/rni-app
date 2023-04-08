import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { RootStackParamList } from "./types";
import { HeaderRight, HeaderTitle } from "../../components";
import {
  Menu,
  Notification,
  NotificationDetails,
  Account,
  AppInformation,
  Comments,
  Datasheet,
  Details,
  Document,
  Gallery,
  Progress,
  ReferFriend,
  Tendencies,
  Tips,
  Video,
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
        name="Account"
        component={Account}
        options={{
          headerTitle: "Minha Conta",
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
        name="Document"
        component={Document}
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
        name="ReferFriend"
        component={ReferFriend}
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
        name="Tips"
        component={Tips}
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
    </Stack.Navigator>
  );
};
