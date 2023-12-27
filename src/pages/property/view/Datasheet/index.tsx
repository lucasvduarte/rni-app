import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  FlatList,
  Skeleton,
  Text,
  WebViewPage,
} from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getDatasheet } from "../../services/Datasheet";
import { formatDatasheet, infoHtml } from "./help";

export const Datasheet = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getDatasheet",
    queryFn: () => getDatasheet(enterpriseSelect?.EMPCOD || ""),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={2} height={30} m="xl" />;
  }

  return (
    <Box px="xl" flex={1}>
      {data?.data.result[0]?.informacoes_adicionais ? (
        <WebViewPage
          source={{ html: infoHtml(data?.data.result[0]) }}
          style={{ backgroundColor: "transparent" }}
        />
      ) : (
        <FlatList
          data={formatDatasheet(data?.data.result[0])}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 24 }}
          renderItem={({ item }) => {
            return (
              <Box flexDir="row" alignItems="flex-start">
                <Text
                  title={item.title}
                  fontSize="4xl"
                  pb="sm"
                  fontWeight="700"
                />
                <Text
                  title={item.value}
                  fontSize="3xl"
                  pb="sm"
                  flex={1}
                  pt={2}
                />
              </Box>
            );
          }}
        />
      )}
    </Box>
  );
};
