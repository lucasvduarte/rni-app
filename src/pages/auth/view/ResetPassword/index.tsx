import { Box, Button, TextInput, Image } from "../../../../components";
import React, { useState } from "react";
import { LoginPng } from "../../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { getResetPassword } from "../../../account/services/User";
import { ResetPasswordProps } from "../../../../navigation/public/types";

export const ResetPassword = ({ navigation }: ResetPasswordProps) => {
  const [cpfcnpj, setCpfcnpj] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => await getResetPassword(cpfcnpj),
    onSuccess: () => {
      navigation.navigate("OtpPage", {
        headerTitle: "Esqueci minha senha",
        cpfcnpj: cpfcnpj,
        navigate: "NewPassword",
      });
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  return (
    <Box flex={1} mb="2lg">
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box
          alignItems="center"
          justifyContent="center"
          animation="flipInY"
          duration={1200}
        >
          <Image source={LoginPng} resizeMode="contain" />
        </Box>
        <Box p="xl" pt="4xl" animation="fadeInUp" delay={500}>
          <TextInput
            placeholder="CPF/CNPJ"
            size="large"
            keyboardType="numeric"
            value={cpfcnpj}
            onChangeText={(value) => setCpfcnpj(value)}
            maxLength={18}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => mutate()}
        loading={isLoading}
        mx="xl"
        isBold
        bg="moderateGreen"
        animation="fadeIn"
        delay={500}
      />
    </Box>
  );
};
