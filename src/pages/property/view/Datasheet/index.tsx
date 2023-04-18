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
import { TDatasheet } from "../../services/Datasheet/type";
import { Dimensions } from "react-native";
import { formatDatasheet } from "./help";
const { width } = Dimensions.get("window");

export const Datasheet = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getDatasheet",
    queryFn: () => getDatasheet(enterpriseSelect?.EMPCOD || ""),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  const datasheetInfo = (value?: TDatasheet) => {
    if (!value) {
      return "<div><div>";
    }
    let fontSize: string = `<div style="font-size:${
      width > 700 ? 24 : 50
    }px; color:#838383"; font-family:Roboto>`;

    if (value.informacoes_adicionais) {
      fontSize += value.informacoes_adicionais
        .replace(/\n/g, "<br/>")
        .replace(/:\*\*/g, ":</b>")
        .replace(/: \*\*/g, ":</b>")
        .replace(/\*\*:/g, ":</b>")
        .replace(/\*\*/g, "<b>");
    }
    return fontSize + "</div>";
  };

  if (isLoading) {
    return <Skeleton size={2} height={30} m="xl" />;
  }

  return (
    <Box px="xl" flex={1}>
      <Text title="Minha Conta" />
      {data?.data.result[0]?.informacoes_adicionais ? (
        <WebViewPage source={{ html: datasheetInfo(data?.data.result[0]) }} />
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
