import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Skeleton, Text, WebViewPage } from "../../../../components";
import { getDocument } from "../../services/Document";

export const DocumentFinancing = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getDocumentFinancing",
    queryFn: () => getDocument(),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={2} listHeight={[30, 400]} m="xl" />;
  }

  return (
    <Box m="xl" flex={1}>
      <Text
        title="Para facilitar e agilizar o processo de financiamento do seu imóvel,
        prepare os documentos descritos no checklist abaixo, selecionando
        aqueles você já possui:"
        fontSize={18}
        mb="xl"
        color="darkGray"
      />
      <WebViewPage
        source={{
          html: !data?.data.result.length ? "" : data?.data.result[0].valor,
        }}
      />
    </Box>
  );
};
