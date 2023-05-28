import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import {
  Box,
  Button,
  ContractInformation,
  ListDescription,
  Modal,
  Skeleton,
} from "../../../../../components";
import { DischargeSimulationProps } from "../../../../../navigation/private/types";
import { getParcelList } from "../../../services/Financial";
import { balanceValue } from "../../helps";
import { formatDatePtBr } from "../../../../../config/utils";

export const DischargeSimulation = ({
  route,
  navigation,
}: DischargeSimulationProps) => {
  const { data, dataParcelList, values } = route.params;

  const {
    data: dataListSimulation,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: "getParcelListDischargeSimulation",
    queryFn: () => getParcelList({ ...data }, { ...values }),
    onError: (error: any) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    //mutationFn: async () => await postParcelSend(user?.cliente),
    onSuccess: () => {},
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const {} = useMutation({
    //mutationFn: async () => await postSalesForce(user?.cliente),
    onSuccess: () => {},
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const list = [
    { title: "Tipo do contrato", description: data?.CTRCLATIP_DES },
    {
      title: "Saldo devedor atual",
      description: balanceValue(dataListSimulation?.data.result),
    },
    { title: "Vencimento", description: formatDatePtBr(values?.dtbase) },
    {
      title: "Incluir parcelas do financiamento?",
      description: !!values?.incparfin ? "Sim" : "Não",
    },
  ].filter((item) => {
    return !!item?.description;
  });

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <ContractInformation />
        {list.map((item) => {
          return (
            <ListDescription
              title={item.title}
              description={item?.description?.toString()}
              key={item.title}
            />
          );
        })}
      </Box>
      <Button title="Confirma" onPress={() => {}} mt="md" />
      <Modal
        title={error?.response?.data?.message || "Desculpe pelo nosso erro"}
        titleBody={
          error?.response?.data?.originalMessage?.message ||
          error?.response?.data?.msgError?.message
        }
        isVisible={isError}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
      />
    </Box>
  );
};
