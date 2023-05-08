import { BottomSheet, Box, Text } from "../../../../../components";
import { ExtractDetailsProps } from "../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";

export const ExtractDatails = ({ route }: ExtractDetailsProps) => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data } = route.params;

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <Text
          title="Informações do empreendimento"
          fontSize="4xl"
          fontWeight="bold"
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
