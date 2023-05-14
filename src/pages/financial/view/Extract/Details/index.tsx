import {
  BottomSheet,
  Box,
  FlatList,
  ListDescription,
  Text,
} from "../../../../../components";
import { formatCurrency, formatDatePtBr } from "../../../../../config/utils";
import { ExtractDetailsProps } from "../../../../../navigation/private/types";

export const ExtractDetails = ({ route }: ExtractDetailsProps) => {
  const { data } = route.params;

  const list = [
    {
      title: `Saldo em atraso até ${formatDatePtBr(new Date())}`,
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.TOT_ATRASO || 0),
    },
    {
      title: `Saldo a vencer até ${formatDatePtBr(new Date())}`,
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.VLR_PRES || 0),
    },
    {
      title: "Total devido para quitação",
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.SLD_DEVEDOR || 0),
    },
    {
      title: "Total taxas pago",
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.AUX2 || 0),
    },
    {
      title: "Total Honorário pago",
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.AUX1 || 0),
    },
    {
      title: `Total pago até ${formatDatePtBr(new Date())}`,
      subtitle: formatCurrency(data.OUTPUT?.E_RODAPE[0]?.TOT_PAGO || 0),
    },
  ];

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <Text
          title="Informações do empreendimento"
          fontSize="4xl"
          fontWeight="bold"
        />

        <FlatList
          data={list}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ListDescription
                title={item.title}
                subtitle={item?.subtitle?.toString()}
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
