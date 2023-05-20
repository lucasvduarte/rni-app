import {
  BottomSheet,
  Box,
  FlatList,
  ListDescription,
  Text,
} from "../../../../../components";
import { formatCurrency, formatDatePtBr } from "../../../../../config/utils";
import { AnticipationSimulationProps } from "../../../../../navigation/private/types";

export const AnticipationSimulation = ({
  route,
}: AnticipationSimulationProps) => {
  const { data } = route.params;

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Box flex={1}>
        <Text
          title="Informações do empreendimento"
          fontSize="4xl"
          fontWeight="bold"
        />

        {/*<FlatList
          data={list}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ListDescription
                title={item.title}
                description={item?.description?.toString()}
              />
            );
          }}
        />*/}
      </Box>
    </Box>
  );
};
