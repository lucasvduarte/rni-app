import React, { useState } from "react";
import { Box, Button, Sliders } from "../../../../../components";
import { SatisfactionAttendanceProps } from "../../../../../navigation/private/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { postFeed, putAttendance } from "../../../service/Attendance";

export const SatisfactionAttendance = ({
  route,
  navigation,
}: SatisfactionAttendanceProps) => {
  const [collaborator, setCollaborator] = useState(0);
  const [company, setCompany] = useState(0);
  const { data } = route.params;

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await putAttendance({
        id: data.id,
        Avaliacao_cliente_canais__c: collaborator.toString(),
      }),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const { mutate: mutateCompany, isLoading: isLoadingCompany } = useMutation({
    mutationFn: async () =>
      await postFeed({
        Body: `<p>pergunta: Em uma escala de conceito de 1 (Um) a 9 (Nove), como classifica o atendimento da empresa de forma geral?”, resposta: ${company}</p>`,
        IsRichText: true,
        LinkUrl: "",
        ParentId: data.id,
        Title: "",
        Type: "TextPost",
      }).then(() => {
        setTimeout(() => {
          navigation.navigate("Attendance");
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

  const onPress = async () => {
    await mutate();
    await mutateCompany();
  };

  return (
    <Box px="xl" pb="2lg" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Sliders
          title="Em uma escala de conceito de 1 (Um) a 9 (Nove), como classifica o
              atendimento de ‘nosso colaborador’, levando em consideração seus
              esclarecimentos, sua eficiência e cordialidade?"
          value={collaborator}
          onValueChange={(value) => setCollaborator(value)}
        />
        <Sliders
          title="Em uma escala de conceito de 1 (Um) a 9 (Nove), como classifica o
              atendimento da empresa de forma geral?”"
          value={company}
          onValueChange={(value) => setCompany(value)}
        />
      </KeyboardAwareScrollView>
      <Button
        title="Enviar"
        onPress={onPress}
        loading={isLoading || isLoadingCompany}
      />
    </Box>
  );
};
