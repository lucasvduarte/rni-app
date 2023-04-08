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
import { setLogin } from "../../../../redux/modules/auth/action";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useQuery } from "react-query";
import { getUser } from "../../services";
import { LoginProps } from "../../../../navigation/public/types";

export const Login = ({ navigation }: LoginProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { colors } = useTheme();
  const [user, setUser] = useState<any>({
    email: "",
    password: "",
    remember: false,
  });
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const dispatch = useAppDispatch();

  const { isLoading, data } = useQuery({
    queryKey: "getUser",
    enabled: false,
    queryFn: () => getUser({ login: "", password: "" }),
    onSuccess: () => {
      //  dispatch(setLogin(data as any));
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "This is an info message",
      });
    },
  });

  useLayoutEffect(() => {
    if (auth.email) {
      const { email, password } = auth;
      setUser({ email: email, password: password || "", remember: !!password });
    }
  }, []);

  const submit = (value: any) => {
    if (!value.remember) {
      value.password = "";
      //  setUser({ ...user, password: "", user: { name: "lucas duarte" } });
    }
    if (value.remember) {
      //exibir msg de ativar login
      // setUser({ ...user, user: { name: "lucas duarte" } });
    }
    //  dispatch(setLogin(value));
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
          value={user.email}
          onChangeText={(value) => setUser({ ...user, email: value })}
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
        <Text
          title="Esqueci minha senha"
          textAlign="right"
          mt="-sm"
          pb="md"
          color="pacificBlue"
          onPress={() => navigation.navigate("ResetPassword")}
        />
        <CheckBox
          checked={user.remember}
          checkedColor={colors.easternBlue}
          onPress={() => setUser({ ...user, remember: !user.remember })}
          title="Lembrar e-mail e senha"
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
        />
        <Button
          title="ENTRAR"
          onPress={() => submit(user)}
          mt="2xl"
          isBold
          bg="moderateGreen"
          loading={isLoading}
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};
