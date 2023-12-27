import Toast from "react-native-toast-message";
import {
  Box,
  Button,
  CheckBox,
  Icon,
  TextInput,
  Text,
  Image,
} from "../../../../components";
import React, { useLayoutEffect, useState } from "react";
import { LoginPng } from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useQuery } from "react-query";
import { LoginProps } from "../../../../navigation/public/types";
import { setUser } from "../../../../redux/modules/auth/action";
import { useBiometric } from "../../../../hooks";
import { getUser } from "../../../account/services/User";

export const Login = ({ navigation }: LoginProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { isBiometricAvailableCallback, isLoading } = useBiometric();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [value, setValue] = useState<any>({
    login: auth.email,
    password: "",
    remember: !!auth.email,
  });

  useLayoutEffect(() => {
    if (auth.password && auth.email) {
      isBiometricAvailableCallback();
    }
  }, [auth.password, auth.email]);

  const { isFetching, refetch } = useQuery({
    queryKey: "getUser",
    enabled: false,
    queryFn: () => getUser(value.login, value.password),
    onSuccess: ({ data }) => {
      if (data.result) {
        dispatch(
          setUser(
            data.result,
            value.login,
            value.remember ? value.password : undefined
          )
        );
      }
    },
    onError: (error: any) => {
      onError(error);
    },
  });

  const onError = (error: any) => {
    const msgError =
      error.response?.data?.msgError?.message || error.response?.data?.msgError;
    if (msgError === "Login não está ativo!") {
      return setTimeout(() => {
        navigation.navigate("OtpPage", {
          headerTitle: "Validar primeiro acesso",
          cpfcnpj: value.login,
          navigate: "Login",
        });
      }, 2000);
    }

    return Toast.show({
      type: "errorToast",
      props: { error },
    });
  };

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
          placeholder="E-mail"
          size="large"
          keyboardType="email-address"
          value={value.login}
          onChangeText={(item) => setValue({ ...value, login: item })}
          maxLength={80}
        />
        <TextInput
          placeholder="Senha"
          size="large"
          secureTextEntry={secureTextEntry}
          value={value.password}
          onChangeText={(item) => setValue({ ...value, password: item })}
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
        <Text
          title="Esqueci minha senha"
          textAlign="right"
          mt="-sm"
          pb="md"
          color="easternBlue"
          onPress={() => navigation.navigate("ResetPassword")}
        />
        <CheckBox
          checked={value.remember}
          color="easternBlue"
          onPress={() => setValue({ ...value, remember: !value.remember })}
          title="Lembrar e-mail e senha"
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
        />
        <Button
          title="ENTRAR"
          onPress={() => refetch()}
          mt="2xl"
          isBold
          bg="moderateGreen"
          loading={isFetching || isLoading}
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};
