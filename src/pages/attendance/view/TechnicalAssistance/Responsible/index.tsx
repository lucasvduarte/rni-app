import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Skeleton,
  TextInput,
} from "../../../../../components";
import { ResponsibleProps } from "../../../../../navigation/private/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { putAttendance } from "../../../service/Attendance";
import { formatDatePtBr } from "../../../../../config/utils";
import { postScheduling } from "../../../service/TechnicalAssistance";
import { TScheduling } from "../../../service/TechnicalAssistance/type";
import { listWarnings } from "./helpes";

export const Responsible = ({ route, navigation }: ResponsibleProps) => {
  const [responsibleValue, setResponsibleValue] = useState("");
  const { data, hour, scheduling } = route.params;

  const {
    mutate: mutateScheduling,
    isLoading: isLoadingScheduling,
    isSuccess: isSuccessScheduling,
  } = useMutation({
    mutationFn: async () =>
      await postScheduling(data.id, {
        accountid: scheduling?.case.accountid || "",
        service_territory__c:
          scheduling?.case.contrato__r.Empreendimento__r.Service_Territory__c ||
          "",
        quem_esta_vistoria__c: responsibleValue,
        data_hora_do_agendamento_da_visita__c:
          scheduling?.case?.data_hora_do_agendamento_da_visita__c || "",
        scheduling: hour as TScheduling,
      }).then(() => {
        setTimeout(() => {
          navigation.navigate("TechnicalAssistance");
        }, 2000);
      }),

    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text2: `Seu agendamento foi realizado com sucesso para o dia ${formatDatePtBr(
          data.data_hora_do_agendamento_da_visita__c
        )}`,
      });
    },
  });

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () =>
      await putAttendance({
        id: data.id,
        visualizado_pelo_cliente__c: true,
        agendamento_confirmado_pelo_cliente__c: true,
        Status_atendimento__c: "Vistoria técnica",
        quem_esta_vistoria__c: responsibleValue,
      }).then(() => {
        setTimeout(() => {
          navigation.navigate("TechnicalAssistance");
        }, 2000);
      }),

    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text2: `Seu agendamento foi realizado com sucesso para o dia ${formatDatePtBr(
          data.data_hora_do_agendamento_da_visita__c
        )}`,
      });
    },
  });

  const onPress = () => {
    if (scheduling && hour) {
      return mutateScheduling();
    }
    return mutate();
  };

  return (
    <Box px="xl" pb="2lg" pt="xl" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <TextInput
          placeholder="Nos conte quem estará no local"
          size="large"
          value={responsibleValue}
          onChangeText={(item) => setResponsibleValue(item)}
          maxLength={80}
        />

        {listWarnings.map((item) => {
          return (
            <Text
              pb="xl"
              title={item}
              iconName="circle-medium"
              alignItemsIcon="flex-start"
              flex={1}
            />
          );
        })}
      </KeyboardAwareScrollView>
      <Button
        title="Confirmar"
        onPress={onPress}
        loading={isLoading || isLoadingScheduling}
        disabled={
          isLoading ||
          isLoadingScheduling ||
          !responsibleValue ||
          isSuccess ||
          isSuccessScheduling
        }
      />
    </Box>
  );
};
