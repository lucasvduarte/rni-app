import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, CarouselGallery, Skeleton } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getImageGallery } from "../../services/Gallery";

export const Constructions = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getImageGalleryObra",
    queryFn: () => getImageGallery(enterpriseSelect?.EMPCOD || "", "obra"),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return (
      <Skeleton size={2} listHeight={[30, 400]} m="xl" borderRadius="xl" />
    );
  }

  return (
    <Box flex={1}>
      <CarouselGallery
        data={data?.data.result}
        keyExtractor={(item) => item.id.toString()}
        renderImage={(item) => {
          return item.url;
        }}
      />
    </Box>
  );
};
