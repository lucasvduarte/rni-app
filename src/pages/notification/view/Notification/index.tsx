import { useQuery } from "react-query";
import { Box, Card, FlatList, Icon, Text } from "../../../../components";
import { getByNotification } from "../../services";
import Toast from "react-native-toast-message";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { NotificationProps } from "../../../../navigation/private/types";
import React from "react";
import { Pressable, View } from "react-native";
import { formatDatePtBr } from "../../../../config/utils/format/data";

export const Notification = ({ navigation }: NotificationProps) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery({
    queryKey: "getByNotification",
    queryFn: () =>
      getByNotification(
        user?.cliente.cpfcnpj || "",
        enterpriseSelect?.EMPCOD || ""
      ),
    onError: (error) => {
      Toast.show({
        type: "error",
      });
    },
  });

  if (isLoading) {
    return null;
  }

  return (
    <Box flex={1} m="xl">
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              shadow="md"
              shadowColor="pantone"
              borderColor="pantone"
              onPress={() => {
                navigation.navigate("NotificationDetails", {
                  notification: item,
                });
              }}
              p="none"
            >
              <Box flexDir="row" justifyContent="space-between">
                <Box p="xl">
                  <Text
                    title={item.titulo}
                    color="prussianBlueWhite"
                    fontWeight="bold"
                    fontSize="2xl"
                  />
                  <Text
                    title={
                      formatDatePtBr(item.criado) === formatDatePtBr(new Date())
                        ? "Hoje"
                        : formatDatePtBr(item.criado)
                    }
                    py="sm"
                  />

                  <Text
                    title="Detalhes"
                    onPress={() => {
                      navigation.navigate("NotificationDetails", {
                        notification: item,
                      });
                    }}
                    color="easternBlue"
                    fontWeight="bold"
                    fontSize="xl"
                    w={60}
                  />
                </Box>

                <Box
                  justifyContent="center"
                  bg="pacificBlue"
                  radiusTopRight="xl"
                  radiusBottomRight="xl"
                  px="xl"
                  onPress={() => {}}
                >
                  <Icon
                    name="delete"
                    type="material-community"
                    size={28}
                    iconColor="prussianBlueWhite"
                    mb="sm"
                  />
                </Box>
              </Box>
            </Card>
          );
        }}
      />
    </Box>
  );
};
