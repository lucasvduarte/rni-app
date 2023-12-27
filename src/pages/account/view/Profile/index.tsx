import Toast from "react-native-toast-message";
import { Box, Button, TextInput } from "../../../../components";
import React, { useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "react-query";
import { putPersonalData } from "../../../account/services/User";

export const Profile = () => {
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [user, setUser] = useState<any>({});

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => await putPersonalData(user?.cliente),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  return (
    <Box flex={1} mb="2lg" animation="fadeInUp" delay={500}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box p="xl" pt="lg">
          <TextInput
            placeholder="Como deseja ser chamado?"
            size="large"
            keyboardType="default"
            value={user.apelido}
            onChangeText={(value) => setUser({ ...user, apelido: value })}
          />
          <TextInput
            placeholder="E-mail"
            size="large"
            keyboardType="email-address"
            value={user.email}
            onChangeText={(value) => setUser({ ...user, email: value })}
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
