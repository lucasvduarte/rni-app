import Toast from "react-native-toast-message";
import { Box, Button, Icon, TextInput, Image } from "../../../../components";
import React, { useState } from "react";
import { LoginPng } from "../../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "react-query";
import { NewPasswordProps } from "../../../../navigation/public/types";
import { getResetPassword } from "../../../account/services/User";

export const NewPassword = ({ navigation, route }: NewPasswordProps) => {
  const { code, cpfcnpj } = route.params;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);
  const [value, setValue] = useState({
    senha: "",
    confirmaSenha: "",
  });

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () => await getResetPassword(cpfcnpj, value.senha, code),
    onSuccess: () => {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const validPassword = !!value.confirmaSenha && !!value.senha;

  return (
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
          placeholder="Senha"
          size="large"
          secureTextEntry={secureTextEntry}
          value={value.senha}
          onChangeText={(item) => setValue({ ...value, senha: item })}
          rightIcon={
            <Icon
              type="feather"
              name={secureTextEntry ? "eye" : "eye-off"}
              size={24}
              iconColor="suvaGrey"
              onPress={() => setSecureTextEntry((state) => !state)}
            />
          }
          maxLength={80}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Confirma senha"
          size="large"
          secureTextEntry={secureTextEntry2}
          value={value.confirmaSenha}
          onChangeText={(item) => setValue({ ...value, confirmaSenha: item })}
          rightIcon={
            <Icon
              type="feather"
              name={secureTextEntry2 ? "eye" : "eye-off"}
              size={24}
              iconColor="suvaGrey"
              onPress={() => setSecureTextEntry2((state) => !state)}
            />
          }
          errorMessage={
            validPassword && value.confirmaSenha !== value.senha
              ? "senhas não conferem"
              : ""
          }
          maxLength={80}
          autoCapitalize="none"
        />

        <Button
          title="ENVIAR"
          onPress={() => mutate()}
          mt="2xl"
          isBold
          bg="moderateGreen"
          loading={isLoading}
          disabled={isSuccess}
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};
