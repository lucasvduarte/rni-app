import React from "react";
import {
  Box,
  Button,
  Skeleton,
  Sliders,
  TextInput,
} from "../../../../../components";
import { SatisfactionProps } from "../../../../../navigation/private/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Satisfaction = ({ navigation }: SatisfactionProps) => {
  return (
    <Box px="xl" pb="2lg" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Sliders
          title="Que nota você atribui para a qualidade do serviço executado?"
          value={1}
          onValueChange={(value) => {}}
        />
        <Sliders
          title="Que nota você atribui para o atendimento da manutenção?"
          value={1}
          onValueChange={(value) => {}}
        />
        <Sliders
          title="Qual seu índice de satisfação desse atendimento?"
          value={1}
          onValueChange={(value) => {}}
          mb="4xl"
        />
        <TextInput
          placeholder="Descrição"
          size="large"
          multiline
          numberOfLines={4}
          //value={observation}
          onChangeText={(item) => console.log(item)}
          maxLength={160}
        />
      </KeyboardAwareScrollView>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate("TechnicalAssistance")}
      />
    </Box>
  );
};
