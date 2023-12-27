import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import {
  Box,
  Button,
  ContractInformation,
  Icon,
  ListDescription,
  Modal,
  Skeleton,
  Text,
} from "../../../../../components";
import { AnticipationSimulationProps } from "../../../../../navigation/private/types";
import {
  getParcelList,
  postParcelSend,
  postSalesForce,
} from "../../../services/Financial";
import { balanceValue } from "../../helps";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { formatDataList } from "./help";
import { useState } from "react";

export const AnticipationSimulation = ({
  route,
  navigation,
}: AnticipationSimulationProps) => {
  const [onSubmit, setOnSubmit] = useState(false);
  const { data, dataParcelList, values } = route.params;
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
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
        type: "errorToast",
        props: { error },
      });
    },
  });

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: async () =>
      await postParcelSend(
        user?.cliente.cpfcnpj,
        data.CTRCLATIP_DES,
        "Antecipacao",
        values?.dtbase,
        dataParcelList
      ),
    onSuccess: () => {
      mutateSalesForce();
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const { mutate: mutateSalesForce, isLoading: isLoadingSalesForce } =
    useMutation({
      mutationFn: async () =>
        await postSalesForce(
          enterpriseSelect,
          user?.cliente.cpfcnpj,
          balanceValue(dataListSimulation?.data.result, true) as number,
          true,
          values
        ),
      onSuccess: () => {
        navigationPayments();
      },
      onError: () => {
        navigationPayments();
      },
    });

  const navigationPayments = () => {
    navigation.navigate("Payments", { data, headerTitle: "" });
  };

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <ContractInformation />
        {formatDataList(
          data?.CTRCLATIP_DES,
          dataParcelList,
          dataListSimulation?.data.result,
          values
        ).map((item) => {
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
        <Button
          title="Detalhe das Parcelas"
          onPress={() =>
            navigation.navigate("DetailsParcel", {
              data: dataParcelList,
            })
          }
          type="clear"
          iconPosition="right"
          w={182}
          isBold
          icon={
            <Icon
              type="material-community"
              name="chevron-right"
              size={26}
              iconColor="easternBlue"
              pr="xs"
            />
          }
        />
      </Box>
      <Button
        title="Confirma"
        onPress={() => setOnSubmit(true)}
        mt="md"
        loading={isLoadingMutation || isLoadingSalesForce}
      />
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

      <Modal
        title="Atenção: Ao clicar em Gerar Antecipação será gerado um boleto com as parcelas que deseja antecipar no vencimento selecionado."
        isVisible={onSubmit}
        onBackdropPress={(value) => setOnSubmit(value)}
        onPressSecondary={() => setOnSubmit(false)}
        onPressPrimary={() => mutate()}
      />
    </Box>
  );
};
