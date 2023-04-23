import Toast from "react-native-toast-message";
import { Box, Button, Icon, TextInput } from "../../../../components";
import * as Animatable from "react-native-animatable";
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

  const { mutate, isLoading } = useMutation({
    mutationFn: () => getResetPassword(cpfcnpj, value.senha, code),
    onSuccess: () => {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);
    },
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  const validPassword = !!value.confirmaSenha && !!value.senha;

  return (
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
              onPress={() => {
                setSecureTextEntry((state) => !state);
              }}
            />
          }
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
              onPress={() => {
                setSecureTextEntry2((state) => !state);
              }}
            />
          }
          errorMessage={
            validPassword && value.confirmaSenha !== value.senha
              ? "senhas não conferem"
              : ""
          }
        />

        <Button
          title="ENVIAR"
          onPress={() => mutate()}
          mt="2xl"
          isBold
          bg="moderateGreen"
          loading={isLoading}
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};
