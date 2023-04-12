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
    enabled: false,
    queryFn: () => getDatasheet(enterpriseSelect?.EMPCOD || ""),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  console.log(JSON.stringify(data, null, 2));

  return (
    <Box m="xl">
      <Text title="Minha Conta" />
    </Box>
  );
};
