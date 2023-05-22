import Toast from "react-native-toast-message";
import {
  Box,
  Contract,
  FlatList,
  InfoAlert,
  Modal,
  Skeleton,
  Text,
} from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getPaymentSlip } from "../../services/Financial";
import { formatContractSmall } from "../../../../config/request";
import { CopyDocumentPaymentSlipProps } from "../../../../navigation/private/types";
import { TItem } from "../../../../redux/modules/auth/type";
import { useState } from "react";
import { TResponsePaymentSlip } from "../../services/Financial/type";
import { CardPayment } from "./CardPayments";

export const CopyDocumentPaymentSlip = ({
  navigation,
}: CopyDocumentPaymentSlipProps) => {
  const { enterpriseSelect, user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [data, setData] = useState<TResponsePaymentSlip[]>([]);
  const [ctrclatip, setCtrclatip] = useState("");

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (value: TItem) => {
      await getPaymentSlip(
        user?.cliente.cpfcnpj || "",
        formatContractSmall(value.CTRCLATIP.toString(), enterpriseSelect)
      ).then((response) => {
        if (response.data.length) {
          setData(response.data);
          setCtrclatip(value.CTRCLATIP.toString());
        }
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      {!user?.cliente_sap[0].Z_ENVBOL && (
        <InfoAlert
          title="Deseja receber os boletos via e-mail? Clique aqui para autorizar seu
          Boleto Digital."
          onPress={() => navigation.navigate("PaymentSlipAuthorization")}
          mb="xl"
        />
      )}
      <Text
        title="Clique no botão abaixo para emitir a 2ª via do boleto."
        fontSize="2xl"
      />
      {!data.length && (
        <Box flex={1}>
          <Text
            my="sm"
            title="Atenção: a emissão da 2ª via de boleto é válida apenas para parcelas a vencer e não para parcelas vencidas."
            fontSize="2xl"
          />
          <Text
            fontSize="2xl"
            title="Para emissão do boleto de uma parcela vencida entre em contato com a Central de Negociação pelos telefones 0800 200 5500 ou WhatsApp 11 989025808."
          />
          <Contract onPress={(item) => mutate(item)} />
        </Box>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.BELNR.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <CardPayment item={item} ctrclatip={ctrclatip} />;
        }}
      />

      <Modal
        title="Aviso"
        titleBody="Não foram encontrados boletos pendentes para esse contrato"
        isVisible={isSuccess && !data.length}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
      />
    </Box>
  );
};
