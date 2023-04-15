import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getProgress } from "../../services/Progress";

export const Progress = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getProgress",
    queryFn: () => getProgress(enterpriseSelect?.EMPCOD || ""),
    onError: () => {
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
