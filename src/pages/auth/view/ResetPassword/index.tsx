import { Box, Button, TextInput } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { LoginPng } from "../../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const ResetPassword = () => {
  const [cpfcnpj, setCpfcnpj] = useState("");

  const submit = (value: any) => {};

  return (
    <Box flex={1} mb="2lg">
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box alignItems="center" justifyContent="center">
          <Animatable.Image
            source={LoginPng}
            animation="flipInY"
            resizeMode="contain"
            duration={1200}
          />
        </Box>
        <Box p="xl" pt="4xl" animation="fadeInUp" delay={500}>
          <TextInput
            placeholder="CPF/CNPJ"
            size="large"
            keyboardType="numeric"
            value={cpfcnpj}
            onChangeText={(value) => setCpfcnpj(value)}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => submit(cpfcnpj)}
        mx="xl"
        isBold
        bg="moderateGreen"
        animation="fadeIn"
        delay={500}
      />
    </Box>
  );
};
