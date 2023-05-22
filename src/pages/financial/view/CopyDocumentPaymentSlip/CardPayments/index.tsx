import { useState } from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { BottomSheet, Box, Card, Text } from "../../../../../components";
import { formatCurrency, formatDatePtBr } from "../../../../../config/utils";
import { postPaymentSlip } from "../../../services/Financial";
import {
  TResponsePaymentSlip,
  TPostPaymentSlip,
} from "../../../services/Financial/type";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { formatContract } from "../../../../../config/request";
import QRCode from "react-native-qrcode-svg";

type TCardPayment = {
  item: TResponsePaymentSlip;
  ctrclatip: string;
};

export const CardPayment = ({ item, ctrclatip }: TCardPayment) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [data, setData] = useState<TPostPaymentSlip | undefined>(undefined);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await postPaymentSlip({
        empresa: item.BUKRS,
        conta: item.HBKID,
        cliente: item.KUNNR,
        dtvenc: item.DTVENC,
        valor: item.WRBTR,
        xref3: item.XREF3,
        cpfcnpj: user?.cliente.cpfcnpj || "",
        Id_Contrato__c: formatContract(enterpriseSelect, ctrclatip),
      }).then((response) => {
        setData(response.data.result);
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  return (
    <Card mx="xs" mb="lg" borderRadius="lg" shadow="sm">
      <Box flexDir="row" justifyContent="space-between" mb="md">
        <Text
          title={formatCurrency(item.WRBTR)}
          fontSize="4xl"
          fontWeight="bold"
        />
        <Text
          title={`Vencimento ${formatDatePtBr(item.DTVENC)}`}
          fontSize="4xl"
          fontWeight="bold"
        />
      </Box>
      <Text
        title="Ver boleto"
        fontSize="4xl"
        fontWeight="bold"
        onPress={() => mutate()}
      />

      {data?.E_BOLETO_BASE64 && (
        <BottomSheet
          source={{
            base64: `data:application/pdf;base64,${data?.E_BOLETO_BASE64}`,
          }}
          shareData={{
            title: "extrato",
            mimetype: "pdf",
            base64: data?.E_BOLETO_BASE64,
          }}
        />
      )}
    </Card>
  );
};
