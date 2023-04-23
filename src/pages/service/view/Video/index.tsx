import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Text } from "../../../../components";
import { getVideos } from "../../services/Video";

export const Video = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getVideos",
    queryFn: () => getVideos(),
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
