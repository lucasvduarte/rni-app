import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, CarouselGallery, Skeleton } from "../../../../components";
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
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={2} listHeight={[30, 400]} m="xl" />;
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
