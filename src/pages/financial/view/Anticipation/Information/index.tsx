import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Calendar,
  ContractInformation,
  ListDescription,
  Modal,
  Select,
  Skeleton,
  TextInput,
} from "../../../../../components";
import { AnticipationInformationProps } from "../../../../../navigation/private/types";
import { getParcelList } from "../../../services/Financial";
import { useEffect, useState } from "react";
import {
  balanceValue,
  includesParcelOfTheType,
  initValueParcelList,
} from "../../helps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { TAnticipationParams } from "../../../services/Financial/type";
import { formatCurrency, formatDatePtBr } from "../../../../../config/utils";

export const AnticipationInformation = ({
  route,
  navigation,
}: AnticipationInformationProps) => {
  const { data } = route.params;
  const [incparfin, setIncparfin] = useState(true);
  const [values, setValues] = useState<TAnticipationParams>(
    {} as TAnticipationParams
  );
  const [visible, setVisible] = useState(false);
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  useEffect(() => {
    setValues(initValueParcelList(enterpriseSelect));
  }, []);

  const {
    data: dataParcelList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: "getParcelListAnticipation",
    queryFn: () => getParcelList({ ...data }),
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
    return item?.description !== undefined;
  });

  const isValueValid = values.valor !== undefined;

  const onChange = (value: string) => {
    if (values.valor !== undefined) {
      return setValues({
        ...values,
        valor: formatCurrency(value),
      });
    }
    const valueNumber = Number(value.replace(/\D/g, ""));
    const newValue =
      valueNumber > (dataParcelList?.data?.result.length || 0)
        ? dataParcelList?.data?.result.length
        : valueNumber;
    return setValues({ ...values, parcelas: newValue });
  };

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
          {(data?.CTRCLATIP_DES || "").toLowerCase() === "contrato de venda" &&
            includesParcelOfTheType(dataParcelList?.data.result) && (
              <Select
                label="Incluir parcelas do financiamento?"
                title="Incluir parcelas do financiamento"
                value={incparfin ? "sim" : "nao"}
                onChangeText={(value) => setIncparfin(value === "sim")}
                listValues={[
                  { title: "Sim", value: "sim" },
                  { title: "Não", value: "nao" },
                ]}
                size="large"
              />
            )}

          <Select
            label="Antecipar por?"
            title="Antecipar por"
            value={isValueValid ? "valor" : "parcelas"}
            onChangeText={(value) => {
              const isValue = value === "valor";
              setValues({
                ...values,
                parcelas: isValue ? undefined : 0,
                valor: isValue ? 0 : undefined,
              });
            }}
            listValues={[
              { title: "Valor", value: "valor" },
              { title: "Parcelas", value: "parcelas" },
            ]}
            size="large"
          />

          <TextInput
            label={`Informe abaixo ${
              isValueValid ? "o valor" : "o nº de parcelas"
            } que deseja antecipar`}
            placeholder="Responder"
            size="large"
            keyboardType="number-pad"
            value={(isValueValid ? values.valor : values.parcelas)?.toString()}
            onChangeText={onChange}
            maxLength={16}
          />

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
        onPress={() => setVisible(true)}
        mt="md"
        loading={isLoading}
      />

      <Modal
        title="Importante!"
        titleBody="A antecipação é calculada considerando a última parcela do seu contrato, desta forma, seguindo os vencimentos de trás para frente."
        isVisible={visible}
        onBackdropPress={(value) => setVisible(value)}
        onPressSecondary={() => setVisible(false)}
        onPressPrimary={() =>
          navigation.navigate("AnticipationSimulation", {
            data,
            dataParcelList: dataParcelList?.data.result || [],
            values,
          })
        }
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
        title={"Sem parcelas para antecipar"}
        isVisible={!dataParcelList?.data.result.length && !isError}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
      />
    </Box>
  );
};
