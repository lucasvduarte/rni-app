import { useLayoutEffect, useState } from "react";
import { Box, Button, Otp, Text, TimerCountdown } from "../../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { OtpPageProps } from "../../../../navigation/public/types";

export const OtpPage = ({ route, navigation }: OtpPageProps) => {
  const { headerTitle, cpfcnpj } = route.params;
  const [resetTime, setResetTime] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [code, setCode] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle });
  }, []);

  const submit = () => {
    setResetTime(!resetTime);
  };

  return (
    <Box px="xl" py="2lg" flex={1}>
      <KeyboardAwareScrollView
        fadingEdgeLength={500}
        style={{ paddingTop: "10%" }}
      >
        <Box flex={1}>
          <Text
            title="Verifique o código de autorização"
            fontSize="4xl"
            fontWeight="bold"
          />
          <Text title="Enviado para o seu E-mail" fontSize="xl" pb="2lg" />

          <Otp codeCount={6} onChangeText={(value) => setCode(value)} />
          <TimerCountdown
            isFinal={() => {
              setTimeExpired(true);
            }}
            reset={resetTime}
            title="Redefinir código de autorização"
            pt="xl"
            color="easternBlue"
            onPress={submit}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button title="Enviar" onPress={() => {}} disabled={timeExpired} />
    </Box>
  );
};
