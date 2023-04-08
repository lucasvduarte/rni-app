import { Box, Button } from "../../../../components";
import * as Animatable from "react-native-animatable";
import React from "react";
import { LoginPng } from "../../../../assets";
import { WelcomeProps } from "../../../../navigation/public/types";

export const Welcome = ({ navigation }: WelcomeProps) => {
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
