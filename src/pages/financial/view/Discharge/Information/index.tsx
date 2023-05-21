import { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Calendar,
  ContractInformation,
  ListDescription,
  Modal,
  Skeleton,
} from "../../../../../components";
import { formatDatePtBr } from "../../../../../config/utils";
import { DischargeInformationProps } from "../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { getParcelList } from "../../../services/Financial";
import { TAnticipationParams } from "../../../services/Financial/type";
import { initValueParcelList, balanceValue } from "../../helps";

export const DischargeInformation = ({
  route,
  navigation,
}: DischargeInformationProps) => {
  const { data } = route.params;
  const [values, setValues] = useState<TAnticipationParams>(
    {} as TAnticipationParams
  );
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  useEffect(() => {
    setValues(initValueParcelList(enterpriseSelect, { incparfin: true }));
  }, []);

  const {
    data: dataParcelList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: "getParcelList",
    queryFn: () => getParcelList({ ...data }, { incparfin: true }),
    onError: (error: any) => {
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
      description: balanceValue(dataParcelList?.data.result),
    },
    {
      title: "Parcelas em aberto",
      description: dataParcelList?.data?.result.length,
    },
  ].filter((item) => {
    return !!item?.description;
  });

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <KeyboardAwareScrollView fadingEdgeLength={500}>
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
          <Box mt="lg" />
          <Calendar
            label="Data de vencimento"
            onChangeText={(day) => {
              setValues({ ...values, dtbase: day });
            }}
            initialDate={values.dtbase || formatDatePtBr(new Date(), true)}
            placeholder="Data de vencimento"
            size="large"
          />
        </Box>
      </KeyboardAwareScrollView>

      <Button
        title="Simular"
        onPress={() => navigation.navigate("DischargeSimulation", { data })}
        mt="md"
        loading={isLoading}
      />
      <Modal
        title="Desculpe pelo nosso erro"
        titleBody="Tente novamente mais tarde"
        isVisible={isError}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
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
    </Box>
  );
};
