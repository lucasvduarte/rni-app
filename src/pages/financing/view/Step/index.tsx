import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Carousel, Text } from "../../../../components";
import { getStep } from "../../services/Step";

export const Step = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getStep",
    queryFn: () => getStep(),
    onError: (error) => {
      Toast.show({
        type: "error",
      });
    },
  });

  if (isLoading) {
    return null;
  }

  return (
    <Box py="xl">
      <Text title="Passo a Passo" />
      <Carousel />
    </Box>
  );
};
