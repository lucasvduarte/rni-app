import {
  Box,
  Card,
  FlatList,
  ListDescription,
  Text,
} from "../../../../components";
import { formatCurrency, formatDatePtBr } from "../../../../config/utils";
import { DetailsParcelProps } from "../../../../navigation/private/types";

export const DetailsParcel = ({ route }: DetailsParcelProps) => {
  const { data } = route.params;

  return (
    <Box flex={1} px="xl" mb="2lg">
      <Text
        title="Detalhes das parcelas negociadas"
        color="darkGrayGray78"
        fontSize="3xl"
        fontWeight="bold"
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.PARDTAVEN.toString()}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              mt="xl"
              borderRadius="md"
              shadow="sm"
              shadowColor="blackWhite"
            >
              <Box flexDir="row" pb="sm">
                <ListDescription
                  title="Vencimento:"
                  description={formatDatePtBr(item.PARDTAVEN)}
                />
                <ListDescription title="Tipo:" description={item.TSRDES} />
              </Box>
              <ListDescription
                title="Valor:"
                description={formatCurrency(item.SIPVLRAMO + item.SIPCORAMO)}
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
