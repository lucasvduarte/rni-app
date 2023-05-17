import Toast from "react-native-toast-message";
import { Box, Button, Text } from "../../../../components";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { useMutation } from "react-query";
import { putPersonalData } from "../../../account/services/User";
import { TClient } from "../../services/User/type";
import { setClient } from "../../../../redux/modules/auth/action";

export const NotificationAuthorization = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (value: boolean) => {
      let clientAux = { ...user?.cliente };
      clientAux.notificacao_digital = value;
      await putPersonalData(clientAux as TClient);
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
    onSuccess: () => {
      if (user?.cliente) {
        dispatch(
          setClient({
            ...user.cliente,
            notificacao_digital: !user?.cliente.notificacao_digital,
          })
        );
      }
    },
  });

  return (
    <Box flex={1} mb="2xl" mx="xl" pt="xl">
      <Box flex={1}>
        <Text
          title="Declaro ciência que as notificações judiciais ou extrajudiciais,
        cobranças, bem como comunicados poderão ocorrer mediante envio ao
        endereço eletrônico fornecido por mim."
          fontSize="3xl"
          pb="xl"
        />

        <Text
          title="Estou ciente que devo manter meus dados atualizados e devo consultar a
        caixa de entrada, caixa de spam e lixo eletrônico do e-mail indicado."
          fontSize="3xl"
        />
      </Box>
      <Button
        title={
          !!user?.cliente.notificacao_digital ? "Não autorizar" : "Autorizar"
        }
        onPress={() => mutate(!user?.cliente.notificacao_digital)}
        bg="moderateGreen"
        loading={isLoading}
      />
    </Box>
  );
};
