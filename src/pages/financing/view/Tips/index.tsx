import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { getTips } from "../../services/Tips";

export const TipsFinancing = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getTips",
    queryFn: () => getTips(),
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
    <Box m="xl">
      <Text title="Minha Conta" />
    </Box>
  );
};
