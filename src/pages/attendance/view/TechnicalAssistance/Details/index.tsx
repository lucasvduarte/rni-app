import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import { Box, Card, FlatList, Skeleton, Text } from "../../../../../components";
import { getFeedTask, putAttendance } from "../../../service/Attendance";
import { TechnicalAssistanceDetailsProps } from "../../../../../navigation/private/types";
import { useEffect } from "react";

export const TechnicalAssistanceDetails = ({
  navigation,
  route,
}: TechnicalAssistanceDetailsProps) => {
  const { data } = route.params;

  const { data: dataFeed, isLoading } = useQuery({
    queryKey: "getFeedTask",
    queryFn: () => getFeedTask(data.id),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const { mutate, isLoading: isLoadingMutate } = useMutation({
    mutationFn: async () => {
      if (!data.visualizado_pelo_cliente__c) {
        await putAttendance({
          id: data.id,
          visualizado_pelo_cliente__c: true,
        });
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  useEffect(() => {
    if (!data.visualizado_pelo_cliente__c) {
      mutate();
    }
  }, []);

  const onPress = async (uri: string) => {
    let uriFormat: string[] = uri.split("https");
    uriFormat = uriFormat[1].split('"');
    //   let result = await WebBrowser.openBrowserAsync(`https${uriFormat[0]}`);
    //  return result;
  };

  if (isLoading || isLoadingMutate) {
    return <Skeleton m="xl" height={400} borderRadius="xl" />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={dataFeed?.data.records[0].feeds.records}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              shadow="md"
              shadowColor="pantone"
              borderColor="pantone"
            >
              <Text title="Titulo" color="moderateGreen" fontWeight="700" />
            </Card>
          );
        }}
      />
    </Box>
  );
};
