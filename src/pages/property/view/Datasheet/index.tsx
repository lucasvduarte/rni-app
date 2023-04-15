import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getDatasheet } from "../../services/Datasheet";

export const Datasheet = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getDatasheet",
    queryFn: () => getDatasheet(enterpriseSelect?.EMPCOD || ""),
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
