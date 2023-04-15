import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { getDocument } from "../../services/Document";

export const DocumentFinancing = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getDocumentFinancing",
    queryFn: () => getDocument(),
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
