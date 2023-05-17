import { Box, Button, Text } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useLayoutEffect } from "react";
import { LoginPng } from "../../../../assets";
import { WelcomeProps } from "../../../../navigation/public/types";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { version } from "../../../../../package.json";

export const Welcome = ({ navigation }: WelcomeProps) => {
  const { email } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  useLayoutEffect(() => {
    if (email) {
      return navigation.navigate("Login");
    }
  }, []);

  return (
    <Box px="xl" pb="2lg" flex={1}>
      <Box flex={1}>
        <Box alignItems="center" justifyContent="center">
          <Animatable.Image
            source={LoginPng}
            animation="flipInY"
            resizeMode="contain"
            duration={1200}
          />
        </Box>
        <Box pt="4xl" animation="fadeInUp" delay={500}>
          <Button
            title="LOGIN"
            onPress={() => navigation.navigate("Login")}
            isBold
            bg="moderateGreen"
          />
          <Button
            title="PRIMEIRO ACESSO"
            onPress={() => navigation.navigate("Register")}
            mt="2lg"
            isBold
            bg="moderateGreen"
            type="clear"
          />
        </Box>
      </Box>
      <Text
        title={`versão do app ${version}`}
        fontSize="lg"
        textAlign="center"
      />
    </Box>
  );
};
