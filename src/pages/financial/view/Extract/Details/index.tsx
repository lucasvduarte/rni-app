import {
  BottomSheet,
  Box,
  FlatList,
  ListDescription,
  Text,
} from "../../../../../components";
import { ExtractDetailsProps } from "../../../../../navigation/private/types";
import { formatData } from "./helps";

export const ExtractDetails = ({ route }: ExtractDetailsProps) => {
  const { data } = route.params;
  const dataList = data.OUTPUT?.E_RODAPE;

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <Text
          title="Informações do empreendimento"
          fontSize="4xl"
          fontWeight="bold"
        />

        <FlatList
          data={formatData(dataList?.length ? dataList[0] : undefined)}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ListDescription
                title={item.title}
                description={item?.description?.toString()}
              />
            );
          }}
        />
      </Box>
      {data?.pdfBase64 && (
        <BottomSheet
          source={{
            base64: `data:application/pdf;base64,${data?.pdfBase64}`,
          }}
          shareData={{
            title: "extrato",
            mimetype: "pdf",
            base64: data?.pdfBase64,
          }}
        />
      )}
    </Box>
  );
};
