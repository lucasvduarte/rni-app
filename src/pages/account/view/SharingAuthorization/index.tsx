import { Box, Button, Skeleton, Text } from "../../../../components";
import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { useMutation, useQuery } from "react-query";
import {
  getLgpd,
  putSharingAuthorization,
} from "../../services/SharingAuthorization";

export const SharingAuthorization = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getAttendance",
    queryFn: () => getLgpd(user?.cliente.cpfcnpj || ""),
  });

  const { mutate, isLoading: isLoadingSharingAuthorization } = useMutation(
    async (value: "Não autorizo" | "Autorizo") => {
      await putSharingAuthorization(value, data?.data.records[0].id || "");
    }
  );

  if (isLoading) {
    return <Skeleton m="xl" height={400} borderRadius="xl" />;
  }

  return (
    <Box flex={1} mb="2xl" mx="xl" pt="xl">
      <Box flex={1}>
        <Text
          title="Autorizar compartilhamento de dados com o Grupo Rodobens?"
          fontSize="3xl"
          pb="xl"
        />
        <Text
          title="Esta é a sua oportunidade de receber produtos e ofertas das Empresas
        Rodobens(Rodobens Consórcio, Banco Rodobens, Rodobens Seguros, Automóveis, Veículos Comerciais, Imóveis)."
          fontSize="3xl"
        />
      </Box>
      <Button
        title={
          data?.data?.records[0]
            ?.compartilhamento_dados_empresas_rodobens__c === "Autorizo"
            ? "Não autorizar"
            : "Autorizar"
        }
        onPress={() =>
          mutate(
            data?.data?.records[0]
              ?.compartilhamento_dados_empresas_rodobens__c === "Autorizo"
              ? "Não autorizo"
              : "Autorizo"
          )
        }
        bg="moderateGreen"
        loading={isLoadingSharingAuthorization}
      />
    </Box>
  );
};
