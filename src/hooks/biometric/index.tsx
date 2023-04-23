import { useCallback } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useQuery } from "react-query";
import Toast from "react-native-toast-message";
import { setUser } from "../../redux/modules/auth/action";
import { RootState } from "../../redux/store";
import { getUser } from "../../pages/account/services/User";

export const useBiometric = () => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { isLoading, refetch } = useQuery({
    queryKey: "getUser",
    enabled: false,
    queryFn: () => getUser(auth?.email || "", auth?.password || ""),
    onSuccess: ({ data }) => {
      if (data.result && auth?.email) {
        dispatch(setUser(data.result, auth.email, auth?.password));
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const isBiometricAvailableCallback = useCallback(async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!!auth.password && isBiometricAvailable) {
      return handleBiometricAuth();
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

  const handleBiometricAuth = useCallback(async () => {
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
      refetch();
    }
    return;
  }, []);

  return { isBiometricAvailableCallback, isLoading };
};
