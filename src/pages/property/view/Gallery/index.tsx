import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, CarouselGallery, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getImageGallery } from "../../services/Gallery";

export const Gallery = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getImageGallery",
    queryFn: () => getImageGallery(enterpriseSelect?.EMPCOD || "", "galeria"),
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
    <Box>
      <Text title="Galeria" />
      <CarouselGallery />
    </Box>
  );
};
