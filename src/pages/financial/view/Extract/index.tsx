import Toast from "react-native-toast-message";
import { Box, Skeleton, Text } from "../../../../components";
import { useMutation } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postExtratc } from "../../services/Financial";
import { formatContract } from "../../../../config/request";

export const PaymentInfo = () => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, isLoading } = useMutation(
    async (value: any) => {
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
