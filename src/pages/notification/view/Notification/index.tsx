import { useQuery } from "react-query";
import { Box, Card, FlatList, Text } from "../../../../components";
import { getByNotification } from "../../services";
import Toast from "react-native-toast-message";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { NotificationProps } from "../../../../navigation/private/types";

export const Notification = ({ navigation }: NotificationProps) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery({
    queryKey: "getByNotification",
    enabled: false,
    queryFn: () =>
      getByNotification(
        user?.cliente.cpfcnpj || "",
        enterpriseSelect?.EMPCOD || ""
      ),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  console.log(JSON.stringify(data, null, 2));

  if (isLoading) {
    return null;
  }

  return (
    <Box m="xl" flex={1}>
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              borderWidth={0}
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
