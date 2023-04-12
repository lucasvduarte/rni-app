import { useQuery } from "react-query";
import { Box, Card, FlatList, Text } from "../../../../components";
import { getNotificationText } from "../../services";
import Toast from "react-native-toast-message";
import { NotificationDetailsProps } from "../../../../navigation/private/types";

export const NotificationDetails = ({ route }: NotificationDetailsProps) => {
  const { notification } = route.params;

  const { data, isLoading } = useQuery({
    queryKey: "getUser",
    enabled: false,
    queryFn: () => getNotificationText(notification.guidcontrol),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

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
            <Card borderRadius="xl" bg="whiteDarkGray" borderWidth={0}>
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
