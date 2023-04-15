import { useQuery } from "react-query";
import { Box, Card, FlatList, Text } from "../../../../components";
import { getByNotification } from "../../services";
import Toast from "react-native-toast-message";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { NotificationProps } from "../../../../navigation/private/types";
import React from "react";
import { View } from "react-native";

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
            >
              <Text
                title="Tiago Luis Quemelo"
                color="prussianBlueWhite"
                fontWeight="700"
              />
              <Text
                title="005584482"
                color="moderateGreen"
                pt="sm"
                fontSize="3xl"
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
