import Toast from "react-native-toast-message";
import {
  BottomSheet,
  Box,
  FlatList,
  ListDescription,
  Skeleton,
} from "../../../../components";
import { useMutation, useQuery } from "react-query";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import {
  getPaymentSlip,
  postPaymentInfo,
  postPaymentSlip,
} from "../../services/Financial";
import {
  formatContract,
  formatContractSmall,
} from "../../../../config/request";
import { useEffect } from "react";
import { formatCpf, formatCurrency } from "../../../../config/utils";
import { formatCnpj } from "../../../../config/utils/format/cpf";
import { PaymentsProps } from "../../../../navigation/private/types";
import { TItem, TResponsePaymentSlip } from "../../services/Financial/type";

type TMutation = {
  item: TResponsePaymentSlip;
  ctrclatip: string;
};

export const Payments = ({ navigation, route }: PaymentsProps) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const { headerTitle, data } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle });
  }, []);

  const {
    mutate,
    isLoading: isLoadingMutation,
    data: dataMutation,
  } = useMutation({
    mutationFn: async ({ item, ctrclatip }: TMutation) => {
      await postPaymentSlip({
        empresa: item.BUKRS,
        conta: item.HBKID,
        cliente: item.KUNNR,
        dtvenc: item.DTVENC,
        valor: item.WRBTR,
        xref3: item.XREF3,
        cpfcnpj: user?.cliente.cpfcnpj || "",
        Id_Contrato__c: formatContract(enterpriseSelect, ctrclatip),
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const { isLoading, refetch } = useQuery({
    queryKey: "getPaymentSlipPayments",
    enabled: false,
    queryFn: () =>
      getPaymentSlip(
        user?.cliente.cpfcnpj || "",
        formatContractSmall(data.CTRCLATIP.toString(), enterpriseSelect)
      ),
    onSuccess: ({ data }) => {
      /*const ticketAux  = data.find(
         (item) =>
           item.DTVENC === dtbase && item.WRBTR === valueSimulation
       );
      mutate()
      */
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading || isLoadingMutation) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}></Box>
    </Box>
  );
};
