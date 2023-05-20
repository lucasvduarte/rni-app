import { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Calendar,
  FlatList,
  ListDescription,
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

  const { data: dataParcelList, isLoading } = useQuery({
    queryKey: "getParcelList",
    queryFn: () => getParcelList({ ...data }, { incparfin: true }),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const list = [
    { title: "Empreendimento", description: enterpriseSelect?.EMPDESCOM },
    { title: "Torre", description: enterpriseSelect?.TORCOD },
    { title: "Unidade", description: enterpriseSelect?.UNICOD },
    { title: "Unidade", description: data?.CTRCLATIP_DES },
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
          <FlatList
            data={list}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{ paddingVertical: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ListDescription
                  title={item.title}
                  description={item?.description?.toString()}
                />
              );
            }}
          />
          <Calendar
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
    </Box>
  );
};
