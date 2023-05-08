import { useMutation, useQuery } from "react-query";
import {
  Box,
  Card,
  FlatList,
  Icon,
  Skeleton,
  Text,
} from "../../../../components";
import { deleteNotification, getByNotification } from "../../services";
import Toast from "react-native-toast-message";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { NotificationProps } from "../../../../navigation/private/types";
import React from "react";
import { formatDatePtBr } from "../../../../config/utils";

export const Notification = ({ navigation }: NotificationProps) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

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
        props: { error },
      });
    },
  });

  const { mutate, isLoading: isLoadingDeleteNotification } = useMutation(
    async ({ idNotification, id }: any) =>
      await deleteNotification(idNotification, user?.cliente.cpfcnpj || "", id),
    {
      onError: (error) => {
        Toast.show({
          type: "error",
          props: { error },
        });
      },
    }
  );

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
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
                  bg={
                    isLoadingDeleteNotification ? "darkGrayGray78" : "warning"
                  }
                  radiusTopRight="xl"
                  radiusBottomRight="xl"
                  px="xl"
                  onPress={() => {
                    mutate({
                      idNotification: item.guildcontrolcontrole,
                      id: item.guidcontrol,
                    });
                  }}
                >
                  <Icon
                    name="delete"
                    type="material-community"
                    size={28}
                    iconColor="red"
                    mb="sm"
                    disabled={isLoadingDeleteNotification}
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
