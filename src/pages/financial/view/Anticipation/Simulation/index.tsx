import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import {
  Box,
  Button,
  ContractInformation,
  ListDescription,
  Modal,
  Skeleton,
  Text,
} from "../../../../../components";
import { formatDatePtBr } from "../../../../../config/utils";
import { AnticipationSimulationProps } from "../../../../../navigation/private/types";
import {
  getParcelList,
  postParcelSend,
  postSalesForce,
} from "../../../services/Financial";
import { balanceTwoValue } from "../../helps";
import { setClient } from "../../../../../redux/modules/auth/action";

export const AnticipationSimulation = ({
  route,
  navigation,
}: AnticipationSimulationProps) => {
  const { data, dataParcelList, values } = route.params;

  const {
    data: dataListSimulation,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: "getParcelListAnticipationSimulation",
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
      title: "Valor antecipado",
      description: data?.CTRCLATIP_DES,
    },
    {
      title: "Total de parcelas",
      description: dataParcelList.length.toString(),
    },
    { title: "Vencimento", description: formatDatePtBr(values?.dtbase) },
    {
      title: "Novo saldo devedor",
      description: balanceTwoValue(
        dataParcelList,
        dataListSimulation?.data.result
      ),
    },
    {
      title: "Nova quantidade de parcelas",
      description: (
        dataParcelList.length - (dataListSimulation?.data.result.length || 0)
      ).toString(),
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

        <Text title="* A antecipação é gerada considerando as parcelas de trás para frente." />
        <Text
          title="* É possível antecipar somente o valor total de cada parcela, desta
          forma, caso o valor solicitado para antecipação não contemple o total
          da parcela, o sistema automaticamente irá refazer o cálculo ajustando
          o valor."
        />
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
