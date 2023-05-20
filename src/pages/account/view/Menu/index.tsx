import { useState } from "react";
import { version } from "../../../../../package.json";
import { Box, Divider, FlatList, Modal, Text } from "../../../../components";
import { Switch } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { clearUser, setTheme } from "../../../../redux/modules/auth/action";
import { RootState } from "../../../../redux/store";
import { Pressable } from "react-native";
import {
  AccountMenuProps,
  RootStackParamList,
} from "../../../../navigation/private/types";

type TList = {
  title: string;
  router?: keyof RootStackParamList;
  jsx?: JSX.Element;
};

export const AccountMenu = ({ navigation }: AccountMenuProps) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const toggleSwitch = async (value: boolean) => {
    await dispatch(setTheme(value ? "dark" : "light"));
  };

  const list: TList[] = [
    {
      title: "Política de privacidade",
      router: "PolicyAndPrivacy",
    },
    {
      title: "Modo Dark",
      jsx: (
        <Switch value={auth.theme === "dark"} onValueChange={toggleSwitch} />
      ),
    },

    {
      title: "Informações do usuário",
      router: "Profile",
    },
    {
      title: "Redefinir senha",
      router: "RedefinePassword",
    },
    {
      title: "Comunicação Digital",
      router: "NotificationAuthorization",
    },
    {
      title: "Boleto digital",
      router: "PaymentSlipAuthorization",
    },
    {
      title: "Privacidade",
      router: "SharingAuthorization",
    },
    {
      title: "Alterar e-mail",
      router: "ChangeEmail",
    },
    {
      title: "Contatos",
      router: "Contacts",
    },
  ];

  return (
    <Box px="xl" mb="2lg" flex={1} animation="fadeInUp" delay={100}>
      <Box flex={1}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <Divider />}
          renderItem={({ item }) => {
            if (item?.router) {
              return (
                <Pressable
                  style={{ paddingHorizontal: 6 }}
                  onPress={() => navigation.navigate(item.router as never)}
                >
                  <Text title={item.title} py="xl" fontSize="2xl" />
                </Pressable>
              );
            }
            return (
              <Box
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                px="sm"
              >
                <Text title={item.title} py="xl" fontSize="2xl" />
                {item.jsx}
              </Box>
            );
          }}
        />
      </Box>
      <Text
        title="Sair"
        onPress={() => setVisible(true)}
        fontSize="5xl"
        textAlign="center"
        pb="2lg"
      />
      <Text
        title={`versão do app instalado ${version}`}
        fontSize="lg"
        textAlign="center"
      />

      <Modal
        title="Deseja realmente sair do APP?"
        isVisible={visible}
        onBackdropPress={(value) => setVisible(value)}
        onPressSecondary={() => setVisible(false)}
        onPressPrimary={() => dispatch(clearUser())}
      />
    </Box>
  );
};
