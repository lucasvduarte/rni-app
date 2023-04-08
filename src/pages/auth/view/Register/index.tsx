import { Box, Button, Calendar, Icon, TextInput } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { LoginPng } from "../../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Register = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>({});

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
              setUser({ ...user, datanascimento: day });
            }}
            initialDate={user.datanascimento}
            placeholder="Data de nascimento"
            size="large"
          />
          <TextInput
            placeholder="Senha"
            size="large"
            secureTextEntry={secureTextEntry}
            value={user.password}
            onChangeText={(value) => setUser({ ...user, password: value })}
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
            onChangeText={(value) => setUser({ ...user, apelido: value })}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => submit(user)}
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
