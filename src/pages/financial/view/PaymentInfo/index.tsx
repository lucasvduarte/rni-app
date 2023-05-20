import Toast from "react-native-toast-message";
import {
  BottomSheet,
  Box,
  FlatList,
  ListDescription,
  Skeleton,
} from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postPaymentInfo } from "../../services/Financial";
import { formatContract } from "../../../../config/request";
import { useEffect } from "react";
import { formatCpf, formatCurrency } from "../../../../config/utils";
import { formatCnpj } from "../../../../config/utils/format/cpf";

export const PaymentInfo = () => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, isLoading, data } = useMutation({
    mutationFn: async () =>
      await postPaymentInfo({
        I_ANO: "2022",
        I_CPF: user?.cliente.cpfcnpj || "",
        I_EMPCOD: enterpriseSelect?.EMPCOD || "",
        I_NSCCOD: enterpriseSelect?.NSCCOD || "",
        I_TORCOD: enterpriseSelect?.TORCOD || "",
        I_UNICOD: enterpriseSelect?.UNICOD || "",
        I_UNITIP: enterpriseSelect?.UNITIP || "",
        Id_Contrato__c: formatContract(enterpriseSelect),
      }),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  const list = [
    { title: "Nome completo", description: user?.cliente.nome },
    { title: "CPF", description: formatCpf(user?.cliente.cpfcnpj) },
    { title: "Empreendimento", description: enterpriseSelect?.EMPDESCOM },
    {
      title: "CNPJ",
      description: formatCnpj(data?.data.result?.IT_CABECALHO.item[0].EMP_CNPJ),
    },
    {
      title: "Razão Social",
      description: data?.data.result?.IT_CABECALHO.item[0].AUX1 || "",
    },
    {
      title: "Valor total pago no ano de 2022",
      description: formatCurrency(data?.data.result?.IT_SAIDA?.item[0]?.TOTAL),
    },
  ];

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <FlatList
          data={list}
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

      {data?.data?.result?.pdfBase64 && (
        <BottomSheet
          source={{
            base64: `data:application/pdf;base64,${data?.data?.result?.pdfBase64}`,
          }}
          shareData={{
            title: "informePagamento",
            mimetype: "pdf",
            base64: data?.data?.result?.pdfBase64,
          }}
        />
      )}
    </Box>
  );
};
