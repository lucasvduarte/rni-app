import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getTendencies } from "../../services/Tendencies";

export const Tendencies = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getTendencies",
    queryFn: () => getTendencies(user?.cliente.cpfcnpj || ""),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return null;
  }

  return (
    <Box px="xl">
      <Text title="Minha Conta" />
    </Box>
  );
};
