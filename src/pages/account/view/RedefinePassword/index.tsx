import Toast from "react-native-toast-message";
import { Box, Button, Icon, TextInput } from "../../../../components";
import React, { useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "react-query";
import { putRedefinePassword } from "../../../account/services/User";
import { RootState } from "../../../../redux/store";

export const RedefinePassword = () => {
  const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
  const [secureConfirmPasswordEntry, setSecureConfirmPasswordEntry] =
    useState(true);

  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [value, setValue] = useState<{
    confirmaSenha: string;
    senha: string;
  }>({
    confirmaSenha: "",
    senha: "",
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      putRedefinePassword(value.senha, user?.cliente.guidcontrol || ""),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  const onPress = () => {
    if (value.confirmaSenha === value.senha) {
      return mutate();
    }
    return null;
  };

  const validPassword = !!value.confirmaSenha && !!value.senha;

  return (
    <Box flex={1} mb="2lg" animation="fadeInUp" delay={500}>
      <KeyboardAwareScrollView fadingEdgeLength={500} style={{ flex: 1 }}>
        <Box p="xl" pt="50%">
          <TextInput
            placeholder="Senha"
            size="large"
            secureTextEntry={securePasswordEntry}
            value={value.senha}
            onChangeText={(item) => setValue({ ...value, senha: item })}
            rightIcon={
              <Icon
                type="feather"
                name={securePasswordEntry ? "eye" : "eye-off"}
                size={24}
                iconColor="suvaGrey"
                onPress={() => {
                  setSecurePasswordEntry((state) => !state);
                }}
              />
            }
          />

          <TextInput
            placeholder="Confirma Senha"
            size="large"
            secureTextEntry={secureConfirmPasswordEntry}
            value={value.confirmaSenha}
            onChangeText={(item) => setValue({ ...value, confirmaSenha: item })}
            rightIcon={
              <Icon
                type="feather"
                name={secureConfirmPasswordEntry ? "eye" : "eye-off"}
                size={24}
                iconColor="suvaGrey"
                onPress={() => {
                  setSecureConfirmPasswordEntry((state) => !state);
                }}
              />
            }
            errorMessage={
              validPassword && value.confirmaSenha !== value.senha
                ? "senhas não conferem"
                : ""
            }
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={onPress}
        mx="xl"
        isBold
        bg="moderateGreen"
        loading={isLoading}
      />
    </Box>
  );
};
