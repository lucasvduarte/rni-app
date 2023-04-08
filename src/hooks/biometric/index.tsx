import { useCallback } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";
import { TAuth } from "../../redux/modules/auth/slice";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/modules/auth/action";
import { useQuery } from "react-query";
import { getUser } from "../../pages/auth/services";
import Toast from "react-native-toast-message";

export const useBiometric = () => {
  const dispatch = useAppDispatch();

  const query = (user: TAuth) =>
    useQuery({
      queryKey: "getUser",
      enabled: false,
      queryFn: () => getUser(user),
      onSuccess: (data) => {
        //dispatch(setUser(data as any));
      },
      onError: () => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "This is an info message",
        });
      },
    });

  const isBiometricAvailableCallback = useCallback(async (auth: TAuth) => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!!auth.password && isBiometricAvailable) {
      return handleBiometricAuth(auth);
    }
    return null;
  }, []);

  const fallBackToDefaultAuth = useCallback(() => {
    console.log("fall back to password authentication");
  }, []);

  const alertComponent = useCallback(
    (title: string, mess: string, btnTxt: string, btnFunc: any) => {
      return Alert.alert(title, mess, [
        {
          text: btnTxt,
          onPress: btnFunc,
        },
      ]);
    },
    []
  );

  const handleBiometricAuth = useCallback(async (auth: TAuth) => {
    // Verifique se o hardware suporta biometria
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback para o método de autenticação padrão (senha) se a impressão digital não estiver disponível
    if (!isBiometricAvailable)
      return alertComponent(
        "Utilize a senha para fazer seu acesso",
        "Biometria não é suportada",
        "OK",
        () => fallBackToDefaultAuth()
      );
    // Verifique os tipos de biometria disponíveis (impressão digital, reconhecimento facial, reconhecimento de íris)
    /* let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
*/
    // Verifique se os dados biométricos são salvos localmente no dispositivo do usuário
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometria não está ativa no celular",
        "Utilize a senha para fazer seu acesso",
        "OK",
        () => fallBackToDefaultAuth()
      );
    // Autentica o uso com biometria (impressão digital, reconhecimento facial, reconhecimento de íris)
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login com biometria",
      cancelLabel: "Cancelar",
      disableDeviceFallback: true,
    });

    // Faça o login do usuário em caso de sucesso
    if (biometricAuth.success) {
      //fazer login aqui

      query(auth);
    }
    return;
  }, []);

  return { isBiometricAvailableCallback };
};
