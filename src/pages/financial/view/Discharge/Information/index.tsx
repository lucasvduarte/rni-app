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
import { formatInformationDataList, initValueParcelList } from "../../helps";

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
    queryKey: "getParcelListDischarge",
    queryFn: () => getParcelList({ ...data }, { incparfin: true }),
    onError: (error: any) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={5} height={80} m="xl" />;
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box flex={1}>
          <ContractInformation />
          {formatInformationDataList(
            data?.CTRCLATIP_DES,
            dataParcelList?.data.result
          ).map((item) => {
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
        onPress={() =>
          navigation.navigate("DischargeSimulation", {
            data,
            dataParcelList: dataParcelList?.data.result || [],
            values,
          })
        }
        mt="md"
        loading={isLoading}
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
        onPressSecondary={() => navigation.goBack()}
      />
      <Modal
        title={"Sem parcelas pendentes para quitar"}
        isVisible={!dataParcelList?.data.result.length && !isError}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
      />
    </Box>
  );
};
