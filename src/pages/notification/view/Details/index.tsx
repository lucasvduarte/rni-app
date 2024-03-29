import { useQuery } from "react-query";
import { Box, Skeleton, Text, WebViewPage } from "../../../../components";
import { getNotificationText } from "../../services";
import Toast from "react-native-toast-message";
import { NotificationDetailsProps } from "../../../../navigation/private/types";
import { Dimensions } from "react-native";
import { formatDatePtBr } from "../../../../config/utils";
const { width } = Dimensions.get("window");

export const NotificationDetails = ({ route }: NotificationDetailsProps) => {
  const { notification } = route.params;

  const { data, isLoading } = useQuery({
    queryKey: "getNotificationText",
    queryFn: () => getNotificationText(notification.guidcontrol),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton m="xl" height={400} />;
  }

  return (
    <Box px="xl" flex={1}>
      <Text
        title={notification.titulo}
        color="pantone"
        fontSize="3xl"
        fontWeight="bold"
      />

      <Text
        title={formatDatePtBr(notification.criado)}
        color="pantone"
        fontSize="lg"
        my="sm"
      />
      <WebViewPage
        source={{
          html: `${data?.data?.result[0].texto}`,
        }}
        style={{ width: width, backgroundColor: "transparent" }}
      />
    </Box>
  );
};
