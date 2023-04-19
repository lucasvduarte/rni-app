import { Box, Button, Divider, FlatList, Text } from "../../../../components";
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
      title: "Sair",
      jsx: (
        <Text
          title="Sair"
          onPress={() => {
            dispatch(clearUser());
          }}
          fontSize="4xl"
        />
      ),
    },
    {
      title: "Perfil",
      router: "Profile",
    },
    {
      title: "Redefinir senha",
      router: "RedefinePassword",
    },
  ];

  return (
    <Box px="xl" flex={1}>
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
  );
};
