import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  FlatList,
  LinearProgress,
  Skeleton,
  Text,
} from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getProgress } from "../../services/Progress";
import { formatProgress } from "./help";

export const Progress = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getProgress",
    queryFn: () => getProgress(enterpriseSelect?.EMPCOD || ""),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={10} height={30} m="xl" borderRadius="2lg" />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={formatProgress(data?.data.result[0])}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 24 }}
        renderItem={({ item }) => {
          return (
            <LinearProgress
              title={item.title}
              value={item.value / 100}
              variant="determinate"
              pb="xl"
            />
          );
        }}
      />
    </Box>
  );
};
