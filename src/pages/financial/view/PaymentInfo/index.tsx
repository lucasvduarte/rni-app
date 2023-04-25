import Toast from "react-native-toast-message";
import {
  BottomSheet,
  Box,
  Button,
  FlatList,
  ListDescription,
  Modal,
  Skeleton,
} from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postPaymentInfo } from "../../services/Financial";
import { formatContract } from "../../../../config/request";
import { useEffect, useState } from "react";
import { formatCpf, formatCurrency } from "../../../../config/utils";
import { useDownload } from "../../../../hooks";
import { formatCnpj } from "../../../../config/utils/format/cpf";

export const PaymentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { share } = useDownload();

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
    { title: "Nome completo", subtitle: user?.cliente.nome },
    { title: "CPF", subtitle: formatCpf(user?.cliente.cpfcnpj) },
    { title: "Empreendimento", subtitle: enterpriseSelect?.EMPDESCOM },
    {
      title: "CNPJ",
      subtitle: formatCnpj(data?.data.result?.IT_CABECALHO.item[0].EMP_CNPJ),
    },
    {
      title: "Razão Social",
      subtitle: data?.data.result?.IT_CABECALHO.item[0].AUX1 || "",
    },
    {
      title: "Valor total pago no ano de 2022",
      subtitle: formatCurrency(data?.data.result?.IT_SAIDA?.item[0]?.TOTAL),
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
                subtitle={item?.subtitle?.toString()}
              />
            );
          }}
        />
      </Box>

      {data?.data?.result?.pdfBase64 && (
        <>
          <Button
            title="Visualizar"
            onPress={() => setIsVisible(true)}
            type="outline"
            mb="xl"
          />
          <Button
            title="Compartilhar"
            onPress={() => {
              share("informePagamento", "pdf", data?.data?.result?.pdfBase64);
            }}
          />
        </>
      )}
      <BottomSheet
        visible={isVisible}
        source={{
          base64: `data:application/pdf;base64,${data?.data?.result?.pdfBase64}`,
        }}
        type="pdf"
        setVisible={(value) => setIsVisible(value)}
      />
    </Box>
  );
};
