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
  Datasheet,
  DocumentProperty,
  Gallery,
  Progress,
  ReferAndWin,
  Blog,
  Video,
  DocumentFinancing,
  Step,
  TipsFinancing,
  DocumentDetailsProperty,
  DocumentAttendance,
  CommonQuestions,
  Search,
  Profile,
  RedefinePassword,
  Attendance,
  TechnicalAssistance,
  NotificationAuthorization,
  PaymentSlipAuthorization,
  SharingAuthorization,
  ChangeEmail,
  Contacts,
  PaymentInfo,
  TechnicalAssistanceDetails,
  AttendanceDetails,
  Extract,
  ExtractDetails,
  Constructions,
  Category,
  Responsible,
  SatisfactionTechnicalAssistance,
  SatisfactionAttendance,
  Scheduling,
  Section,
  Summary,
  Item,
  Files,
  AttendanceConcluded,
  TechnicalAssistanceConcluded,
  CopyDocumentPaymentSlip,
  SearchDetails,
  RegisterAttendance,
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
        name="BlogRni"
        component={Blog}
        options={{
          headerTitle: "Blog Rni",
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
      <Stack.Screen
        name="DocumentDetailsProperty"
        component={DocumentDetailsProperty}
        options={{
          headerTitle: "Documentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="DocumentAttendance"
        component={DocumentAttendance}
        options={{
          headerTitle: "Documentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="CommonQuestions"
        component={CommonQuestions}
        options={{
          headerTitle: "Perguntas frequentes",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Pesquisas",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Perfil",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="RedefinePassword"
        component={RedefinePassword}
        options={{
          headerTitle: "Redifinir senhar",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerTitle: "Atendimentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="AttendanceDetails"
        component={AttendanceDetails}
        options={{
          headerTitle: "Atendimentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistance"
        component={TechnicalAssistance}
        options={{
          headerTitle: "Assistência Técnica",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceDetails"
        component={TechnicalAssistanceDetails}
        options={{
          headerTitle: "Assistência Técnica",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="NotificationAuthorization"
        component={NotificationAuthorization}
        options={{
          headerTitle: "Comunicação Digital",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="PaymentSlipAuthorization"
        component={PaymentSlipAuthorization}
        options={{
          headerTitle: "Boleto digital",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="SharingAuthorization"
        component={SharingAuthorization}
        options={{
          headerTitle: "Privacidade",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{
          headerTitle: "Alterar e-mail",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerTitle: "Contatos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{
          headerTitle: "Informe de pagamentos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Extract"
        component={Extract}
        options={{
          headerTitle: "Extrato",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="ExtractDetails"
        component={ExtractDetails}
        options={{
          headerTitle: "Detalhes do Extrato",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Constructions"
        component={Constructions}
        options={{
          headerTitle: "Fotos da obra",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceCategory"
        component={Category}
        options={{
          headerTitle: "Categoria",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceFiles"
        component={Files}
        options={{
          headerTitle: "Arquivos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceItem"
        component={Item}
        options={{
          headerTitle: "Item",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceSection"
        component={Section}
        options={{
          headerTitle: "Seção",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="TechnicalAssistanceSummary"
        component={Summary}
        options={{
          headerTitle: "Resumo",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Responsible"
        component={Responsible}
        options={{
          headerTitle: "Responsável",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="SatisfactionTechnicalAssistance"
        component={SatisfactionTechnicalAssistance}
        options={{
          headerTitle: "Satisfação",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="SatisfactionAttendance"
        component={SatisfactionAttendance}
        options={{
          headerTitle: "Satisfação",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          headerTitle: "Agendamento",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="AttendanceConcluded"
        component={AttendanceConcluded}
        options={{
          headerTitle: "Chamandos Concluídos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="RegisterAttendance"
        component={RegisterAttendance}
        options={{
          headerTitle: "Chamandos Concluídos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />

      <Stack.Screen
        name="TechnicalAssistanceConcluded"
        component={TechnicalAssistanceConcluded}
        options={{
          headerTitle: "Chamandos Concluídos",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="CopyDocumentPaymentSlip"
        component={CopyDocumentPaymentSlip}
        options={{
          headerTitle: "2° via de Boleto",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
      <Stack.Screen
        name="SearchDetails"
        component={SearchDetails}
        options={{
          headerTitle: "Responder Pesquisas",
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
          headerTintColor: colors.blackWhite,
          headerStyle: { backgroundColor: colors.whiteBlack },
        }}
      />
    </Stack.Navigator>
  );
};
