import React from "react";
import {
  Box,
  Text,
  Button,
  Skeleton,
  TextInput,
} from "../../../../../components";
import { ResponsibleProps } from "../../../../../navigation/private/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const listWarnings = [
  "IMPORTANTE: Necessário que seja uma pessoa maior de 18 anos para nos receber.",
  "A tolerância de atraso é de 15 minutos, caso não tenha ninguém para receber nosso técnico, a solicitação será concluída.",
  "Serão analisados somente os itens que constam liberados nessa solicitação, nossa equipe irá informar todas as orientações necessárias no momento da vistoria.",
  "Caso necessário realizar alterações no seu agendamento, nos chame no WhatsApp 11 3003-1155.",
];

export const Responsible = ({ route, navigation }: ResponsibleProps) => {
  //const { data } = route.params;

  return (
    <Box px="xl" pb="2lg" pt="xl" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <TextInput
          placeholder="Nos conte quem estará no local"
          size="large"
          //value={observation}
          onChangeText={(item) => console.log(item)}
          maxLength={160}
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
        title="Continuar"
        onPress={() => navigation.navigate("TechnicalAssistance")}
      />
    </Box>
  );
};
