import { Box, Text } from "../../../../components";
import { SearchDetailsProps } from "../../../../navigation/private/types";

export const SearchDetails = ({ route }: SearchDetailsProps) => {
  const { data } = route.params;

  return (
    <Box m="xl">
      <Text title="Minha Conta" />
    </Box>
  );
};
