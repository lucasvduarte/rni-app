import {
  Box,
  Button,
  ContractInformation,
  ListDescription,
  Text,
} from "../../../../../components";
import { formatCurrency, formatDatePtBr } from "../../../../../config/utils";
import { AnticipationSimulationProps } from "../../../../../navigation/private/types";

export const AnticipationSimulation = ({
  route,
}: AnticipationSimulationProps) => {
  const { data } = route.params;

  const list = [
    { title: "Tipo do contrato", description: data?.CTRCLATIP_DES },
    {
      title: "Valor antecipado",
      description: data?.CTRCLATIP_DES,
    },
    {
      title: "Total de parcelas",
      description: data?.CTRCLATIP_DES,
    },
    { title: "Vencimento", description: data?.CTRCLATIP_DES },
    { title: "Novo saldo devedor", description: data?.CTRCLATIP_DES },
    { title: "Parcelas", description: data?.CTRCLATIP_DES },
  ].filter((item) => {
    return !!item?.description;
  });

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <ContractInformation />
        {list.map((item) => {
          return (
            <ListDescription
              title={item.title}
              description={item?.description?.toString()}
              key={item.title}
            />
          );
        })}
      </Box>
      <Button title="Confirma" onPress={() => {}} mt="md" />
    </Box>
  );
};
