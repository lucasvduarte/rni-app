import Toast from "react-native-toast-message";
import { Box, Button, Text } from "../../../../components";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { useMutation } from "react-query";
import { putPaymentSlipAuthorization } from "../../services/PaymentSlipAuthorization";
import { setClientSap } from "../../../../redux/modules/auth/action";

export const PaymentSlipAuthorization = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation(
    async (value: boolean) => {
      await putPaymentSlipAuthorization(
        user?.cliente.cpfcnpj || "",
        value ? "X" : ""
      );
    },
    {
      onError: (error) => {
        Toast.show({
          type: "error",
          props: { error },
        });
      },
      onSuccess: () => {
        if (user?.cliente) {
          dispatch(
            setClientSap([
              {
                ...user.cliente_sap[0],
                Z_ENVBOL: user?.cliente_sap[0]?.Z_ENVBOL ? "" : "X ",
              },
            ])
          );
        }
      },
    }
  );

  return (
    <Box flex={1} mb="2xl" mx="xl" pt="xl">
      <Box flex={1}>
        <Text
          title="Autorizo o envio de boletos somente através do endereço eletrônico fornecido por mim."
          fontSize="3xl"
          pb="xl"
        />
      </Box>
      <Button
        title={!!user?.cliente_sap[0]?.Z_ENVBOL ? "Não autorizar" : "Autorizar"}
        onPress={() => mutate(!user?.cliente_sap[0]?.Z_ENVBOL)}
        bg="moderateGreen"
        loading={isLoading}
      />
    </Box>
  );
};
