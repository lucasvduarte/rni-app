import Toast from "react-native-toast-message";
import { Box, Button, TextInput } from "../../../../components";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "react-query";
import { putPersonalData } from "../../../account/services/User";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { TClient } from "../../services/User/type";
import { setClient } from "../../../../redux/modules/auth/action";

export const ChangeEmail = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [email, setEmail] = useState(user?.cliente.email || "");
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      let userAux = user?.cliente as TClient;
      userAux.email = email;
      await putPersonalData(userAux);
    },
    onSuccess: () => {
      if (user?.cliente) {
        dispatch(
          setClient({
            ...user.cliente,
            email: email,
          })
        );
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  return (
    <Box flex={1} mb="2lg" animation="fadeInUp" delay={500}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box p="xl" pt="lg">
          <TextInput
            placeholder="E-mail"
            size="large"
            keyboardType="email-address"
            value={email}
            onChangeText={(value) => setEmail(value)}
            maxLength={80}
            autoCapitalize="none"
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => mutate()}
        mx="xl"
        isBold
        bg="moderateGreen"
        loading={isLoading}
      />
    </Box>
  );
};
