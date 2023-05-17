import React, { useState } from "react";
import { Box, Button, Sliders, TextInput } from "../../../../../components";
import { SatisfactionTechnicalAssistanceProps } from "../../../../../navigation/private/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { postSatisfaction } from "../../../service/TechnicalAssistance";
import { formatContract, requestFields } from "../../../../../config/request";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";

export const SatisfactionTechnicalAssistance = ({
  route,
  navigation,
}: SatisfactionTechnicalAssistanceProps) => {
  const [values, setValues] = useState({
    NotaQualidadeServico: 0,
    NotaAtendimentoManutencao: 0,
    IndiceSatisfacaoAtendimento: 0,
    descricao: "",
  });
  const { data } = route.params;
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () =>
      await postSatisfaction(data.id, {
        CaseNumber: data.casenumber,
        Account: {
          Numero_Documento__c: user?.cliente.cpfcnpj,
        },
        Contrato__r: {
          Id_Contrato__c: formatContract(enterpriseSelect),
        },
        Assunto_Portal__c: "Assistência Técnica - Pesquisa Satisfação",
        Origin: requestFields().device,
        ...values,
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
        text2: "Obrigado por responder nossa pesquisa.",
      });
    },
  });

  return (
    <Box px="xl" pb="2lg" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Sliders
          title="Que nota você atribui para a qualidade do serviço executado?"
          value={values.NotaQualidadeServico}
          onValueChange={(value) =>
            setValues({ ...values, NotaQualidadeServico: value })
          }
        />
        <Sliders
          title="Que nota você atribui para o atendimento da manutenção?"
          value={values.NotaAtendimentoManutencao}
          onValueChange={(value) =>
            setValues({ ...values, NotaAtendimentoManutencao: value })
          }
        />
        <Sliders
          title="Qual seu índice de satisfação desse atendimento?"
          value={values.IndiceSatisfacaoAtendimento}
          onValueChange={(value) =>
            setValues({ ...values, IndiceSatisfacaoAtendimento: value })
          }
          mb="4xl"
        />
        <TextInput
          placeholder="Descrição"
          size="large"
          multiline
          numberOfLines={4}
          value={values.descricao}
          onChangeText={(item) => setValues({ ...values, descricao: item })}
          maxLength={160}
        />
      </KeyboardAwareScrollView>
      <Button
        title="Enviar"
        onPress={() => mutate()}
        loading={isLoading}
        disabled={isLoading || isSuccess}
      />
    </Box>
  );
};
