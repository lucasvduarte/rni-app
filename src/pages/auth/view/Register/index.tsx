import { Box, Button, Calendar, Icon, TextInput } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { LoginPng } from "../../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TClientRegister } from "../../../account/services/User/type";
import { postRegister } from "../../../account/services/User";
import { useMutation } from "react-query";
import Toast from "react-native-toast-message";
import { RegisterProps } from "../../../../navigation/public/types";

const USER = {
  apelido: "",
  senha: "",
  cpfcnpj: "",
  datanascimento: "",
  confirmaSenha: "",
  nome: "",
};

export const Register = ({ navigation }: RegisterProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [user, setUser] = useState<TClientRegister>({ ...USER });

  const { mutate, isLoading } = useMutation({
    mutationFn: () => postRegister(user),
    onSuccess: () => {
      navigation.navigate("OtpPage", {
        headerTitle: "Validar primeiro acesso",
        cpfcnpj: user.cpfcnpj,
        navigate: "Login",
      });
    },
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

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
        <Box p="xl" pt="lg" animation="fadeInUp" delay={500}>
          <TextInput
            placeholder="CPF/CNPJ"
            size="large"
            keyboardType="numeric"
            value={user.cpfcnpj}
            onChangeText={(value) => setUser({ ...user, cpfcnpj: value })}
          />
          <Calendar
            onChangeText={(day) => {
              setUser({ ...user, datanascimento: day || "" });
            }}
            initialDate={user.datanascimento}
            placeholder="Data de nascimento"
            size="large"
          />
          <TextInput
            placeholder="Senha"
            size="large"
            secureTextEntry={secureTextEntry}
            value={user.senha}
            onChangeText={(value) => setUser({ ...user, senha: value })}
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
            placeholder="Confirme sua senha"
            size="large"
            secureTextEntry={secureTextEntry}
            value={user.confirmaSenha}
            onChangeText={(value) => setUser({ ...user, confirmaSenha: value })}
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
            placeholder="Como deseja ser chamado?"
            size="large"
            keyboardType="email-address"
            value={user.apelido}
            onChangeText={(value) => {
              setUser({ ...user, apelido: value });
              setUser({ ...user, nome: value });
            }}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => mutate()}
        mx="xl"
        isBold
        bg="moderateGreen"
        animation="fadeIn"
        delay={600}
        loading={isLoading}
      />
    </Box>
  );
};
