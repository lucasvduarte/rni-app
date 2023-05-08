import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, FlatList, Skeleton, Text } from "../../../../components";
import { getVideos } from "../../services/Video";
import YoutubePlayer from "react-native-youtube-iframe";
import { formatDatePtBr } from "../../../../config/utils";

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
    return <Skeleton size={4} height={200} m="xl" borderRadius="xl" />;
  }

  return (
    <Box flex={1} px="xl" py="2lg">
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Box mb="2lg">
              <YoutubePlayer
                height={230}
                play={false}
                videoId={item.url_videos || item.id_youtube}
              />
              <Text
                fontSize={18}
                color="moderateGreen"
                mt="-md"
                fontWeight="bold"
                title={item.titulo}
              />
              <Text fontSize={14} pt="xs" title={formatDatePtBr(item.criado)} />
            </Box>
          );
        }}
      />
    </Box>
  );
};
