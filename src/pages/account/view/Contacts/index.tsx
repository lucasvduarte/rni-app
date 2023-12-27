import Toast from "react-native-toast-message";
import { Box, Button, TextInput } from "../../../../components";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation, useQuery } from "react-query";
import { putPersonalData } from "../../../account/services/User";
import { getCep } from "../../services/Contacts";
import { setClient } from "../../../../redux/modules/auth/action";
import { TClient } from "../../services/User/type";
import { mask } from "react-native-mask-text";

export const Contacts = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [userClient, setUserClient] = useState({
    ...(user?.cliente as TClient),
  });
  const dispatch = useAppDispatch();

  const { isLoading: isLoadingCep, refetch } = useQuery({
    queryKey: "getCep",
    queryFn: () => getCep(userClient.endereco_cep || ""),
    enabled: false,
    onError: (error: any) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
    onSuccess: ({ data }) => {
      setUserClient({
        ...userClient,
        endereco_cidade: data.localidade,
        endereco_bairro: data.bairro,
        endereco_estado: data.uf,
        endereco_logradouro: data.logradouro,
      });
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => await putPersonalData(userClient),
    onSuccess: () => {
      if (userClient) {
        dispatch(setClient(userClient));
      }
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const onChangeCep = (value: string) => {
    setUserClient({ ...userClient, endereco_cep: mask(value, "99999-999") });
    if (value.length === 9) {
      setTimeout(() => {
        refetch();
      }, 400);
    }
  };

  return (
    <Box flex={1} mb="2lg" animation="fadeInUp" delay={500}>
      <KeyboardAwareScrollView fadingEdgeLength={500}>
        <Box p="xl" pt="lg">
          <TextInput
            placeholder="Como deseja ser chamado?"
            size="large"
            keyboardType="default"
            value={userClient.apelido}
            onChangeText={(value) =>
              setUserClient({ ...userClient, apelido: value })
            }
            maxLength={16}
          />
          <TextInput
            placeholder="CEP"
            size="large"
            keyboardType="default"
            value={userClient.endereco_cep}
            onChangeText={onChangeCep}
            maxLength={9}
          />

          <TextInput
            placeholder="Logradouro"
            size="large"
            keyboardType="default"
            value={userClient.endereco_logradouro}
            editable={!userClient.endereco_logradouro}
            onChangeText={(value) =>
              setUserClient({ ...userClient, endereco_logradouro: value })
            }
            maxLength={50}
          />
          <TextInput
            placeholder="Número"
            size="large"
            keyboardType="numeric"
            value={userClient.endereco_numero.toString()}
            onChangeText={(value) =>
              setUserClient({ ...userClient, endereco_numero: value })
            }
            maxLength={8}
          />

          <TextInput
            placeholder="Complemento"
            size="large"
            keyboardType="default"
            value={userClient.endereco_complemento}
            editable={!userClient.endereco_complemento}
            onChangeText={(value) =>
              setUserClient({ ...userClient, endereco_complemento: value })
            }
            maxLength={50}
          />

          <TextInput
            placeholder="Bairro"
            size="large"
            keyboardType="default"
            value={userClient.endereco_bairro}
            editable={!userClient.endereco_bairro}
            onChangeText={(value) =>
              setUserClient({ ...userClient, endereco_bairro: value })
            }
            maxLength={40}
          />

          <TextInput
            placeholder="Cidade"
            size="large"
            keyboardType="default"
            value={userClient.endereco_cidade}
            editable={!userClient.endereco_cidade}
            onChangeText={(value) =>
              setUserClient({ ...userClient, endereco_cidade: value })
            }
            maxLength={40}
          />
          <TextInput
            placeholder="Uf"
            size="large"
            keyboardType="default"
            value={userClient.endereco_estado}
            editable={!userClient.endereco_estado}
            onChangeText={(value) =>
              setUserClient({
                ...userClient,
                endereco_estado: mask(value, "AA"),
              })
            }
            maxLength={2}
          />
          <TextInput
            placeholder="Telefone Fixo"
            size="large"
            keyboardType="numeric"
            value={userClient.tel_residencial}
            onChangeText={(value) =>
              setUserClient({
                ...userClient,
                tel_residencial: mask(value, "99 9999-9999"),
              })
            }
            maxLength={12}
          />
          <TextInput
            placeholder="Telefone Celular"
            size="large"
            keyboardType="numeric"
            value={userClient.tel_celular}
            onChangeText={(value) =>
              setUserClient({
                ...userClient,
                tel_celular: mask(value, "(99) 9 9999-9999"),
              })
            }
            maxLength={16}
          />
          <TextInput
            placeholder="Telefone Comercial"
            size="large"
            keyboardType="numeric"
            value={userClient.tel_comercial}
            onChangeText={(value) =>
              setUserClient({
                ...userClient,
                tel_comercial: mask(value, "99 9999-9999"),
              })
            }
            maxLength={12}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="ENVIAR"
        onPress={() => mutate()}
        mx="xl"
        isBold
        bg="moderateGreen"
        loading={isLoading || isLoadingCep}
      />
    </Box>
  );
};
