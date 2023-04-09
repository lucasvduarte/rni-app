import Toast from "react-native-toast-message";
import {
  Box,
  Button,
  CheckBox,
  Icon,
  TextInput,
  Text,
} from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useLayoutEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { LoginPng } from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useQuery } from "react-query";
import { getUser } from "../../services";
import { LoginProps } from "../../../../navigation/public/types";
import { setPassword, setUser } from "../../../../redux/modules/auth/action";
import { useBiometric } from "../../../../hooks";

export const Login = ({ navigation }: LoginProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { colors } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const { isBiometricAvailableCallback, isLoading } = useBiometric();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [value, setValue] = useState<any>({
    login: auth.email,
    password: "portal",
    remember: !!auth.email,
  });

  useLayoutEffect(() => {
    if (auth.password && auth.email) {
      isBiometricAvailableCallback();
    }
  }, [auth.password, auth.email]);

  const { isFetching } = useQuery({
    queryKey: "getUser",
    enabled: enabled,
    queryFn: () => getUser({ ...value }),
    onSuccess: ({ result }) => {
      if (result) {
        dispatch(setUser(result, value.login));
      }
      setEnabled(false);
    },
    onError: () => {
      Toast.show({
        type: "error",
      });
      setEnabled(false);
    },
  });

  const submit = (value: any) => {
    if (value.remember) {
      dispatch(setPassword(value.password));
    }
    setEnabled(true);
  };

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
          placeholder="E-mail"
          size="large"
          keyboardType="email-address"
          value={value.login}
          onChangeText={(item) => setValue({ ...value, login: item })}
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
              onPress={() => {
                setSecureTextEntry((state) => !state);
              }}
            />
          }
        />
        <Text
          title="Esqueci minha senha"
          textAlign="right"
          mt="-sm"
          pb="md"
          color="pacificBlue"
          onPress={() => navigation.navigate("ResetPassword")}
        />
        <CheckBox
          checked={value.remember}
          checkedColor={colors.easternBlue}
          onPress={() => setValue({ ...value, remember: !value.remember })}
          title="Lembrar e-mail e senha"
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
        />
        <Button
          title="ENTRAR"
          onPress={() => submit(value)}
          mt="2xl"
          isBold
          bg="moderateGreen"
          loading={isFetching || isLoading}
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};
