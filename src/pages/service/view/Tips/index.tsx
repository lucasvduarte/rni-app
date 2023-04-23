import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, CarouselGallery } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getTips } from "../../services/Tips";

export const TipsService = () => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getTips",
    queryFn: () => getTips(user?.cliente.cpfcnpj || ""),
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

  return <Box flex={1}></Box>;
};
