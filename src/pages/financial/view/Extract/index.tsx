import Toast from "react-native-toast-message";
import { Box, Contract, Skeleton, Text } from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postExtratc } from "../../services/Financial";
import { formatContract } from "../../../../config/request";
import { ExtractProps } from "../../../../navigation/private/types";
import { TItem } from "../../../../redux/modules/auth/type";

export const Extract = ({ navigation }: ExtractProps) => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, isLoading } = useMutation(
    async (value: TItem) => {
      await postExtratc({
        I_CTRCLATIP: value.CTRCLATIP,
        I_CTRCOD: String(value?.CTRCOD) || "",
        I_CTRSIT: value?.CTRSIT || "",
        I_EMPCOD: enterpriseSelect?.EMPCOD || "",
        I_NSCCOD: enterpriseSelect?.NSCCOD || 0,
        I_TORCOD: enterpriseSelect?.TORCOD || "",
        I_UNICOD: enterpriseSelect?.UNICOD || "",
        I_UNITIP: enterpriseSelect?.UNITIP || "",
        Id_Contrato__c: formatContract(enterpriseSelect),
      }).then((response) => {
        navigation.navigate("ExtractDatails", { data: response.data.result });
      });
    },
    {
      onError: (error) => {
        Toast.show({
          type: "error",
          props: { error },
        });
      },
    }
  );

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Text
        title="Confira todas as informações referentes à situação do seu imóvel, como
        empreendimento, parcelas, vencimentos, pagamentos, valores a pagar, etc."
        fontSize="2xl"
      />
      <Text
        my="sm"
        title="Em caso de dúvidas entre em contato com a Central de Relacionamento 3003
        1155."
        fontSize="2xl"
      />
      <Contract onPress={(item) => mutate(item)} />
      <Text
        color="moderateGreen"
        my="sm"
        fontSize="4xl"
        fontWeight="bold"
        title="Finalidade"
      />
      <Text
        fontSize="2xl"
        title="O extrato acima serve apenas para conferência e transações recentes
        podem não estar inferidas. Você poderá acessar todas as informações
        disponíveis imprimindo o documento, em Salvar/Imprimir."
      />

      <Text
        color="moderateGreen"
        my="sm"
        fontSize="4xl"
        fontWeight="bold"
        title="Prazo de Compensação"
      />

      <Text
        title="Nosso sistema conta com 3 dias úteis para compensar a baixa de
        pagamento."
        fontSize="2xl"
      />
    </Box>
  );
};
