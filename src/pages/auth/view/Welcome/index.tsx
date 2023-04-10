import { Box, Button } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React, { useLayoutEffect } from "react";
import { LoginPng } from "../../../../assets";
import { WelcomeProps } from "../../../../navigation/public/types";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

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
    <Box px="xl" flex={1}>
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
          mt="xl"
          isBold
          bg="moderateGreen"
        />
      </Box>
    </Box>
  );
};
