import Toast from "react-native-toast-message";
import { Box, Skeleton, Text } from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postPaymentReport } from "../../services/Financial";
import { formatContract } from "../../../../config/request";
import { useEffect } from "react";

export const PaymentInfo = () => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await postPaymentReport({
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

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box>
      <Text
        title="Seguem algumas informações que vão ajudá-lo no seu financiamento"
        color="darkGrayGray78"
        fontSize={18}
        m="xl"
      />
    </Box>
  );
};
