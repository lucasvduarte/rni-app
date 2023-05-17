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
import { isCnpj } from "../../../../config/utils/format/cpf";

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
    mutationFn: async () => await postRegister(user),
    onSuccess: () => {
      navigation.navigate("OtpPage", {
        headerTitle: "Validar primeiro acesso",
        cpfcnpj: user.cpfcnpj,
        navigate: "Login",
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const validPassword = !!user.confirmaSenha && !!user.senha;

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
            maxLength={18}
          />
          {!isCnpj(user.cpfcnpj) && (
            <Calendar
              onChangeText={(day) => {
                setUser({ ...user, datanascimento: day });
              }}
              initialDate={user.datanascimento}
              placeholder="Data de nascimento"
              size="large"
            />
          )}
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
            maxLength={80}
            autoCapitalize="none"
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
            errorMessage={
              validPassword && user.confirmaSenha !== user.senha
                ? "senhas não conferem"
                : ""
            }
            maxLength={80}
            autoCapitalize="none"
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
            maxLength={16}
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
