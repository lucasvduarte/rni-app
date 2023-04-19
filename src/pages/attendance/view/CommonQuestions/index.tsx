import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  FlatList,
  ListItemAccordion,
  Skeleton,
  Text,
} from "../../../../components";
import { getCommonQuestions } from "../../service/CommonQuestions";

export const CommonQuestions = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getCommonQuestions",
    queryFn: () => getCommonQuestions(),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  if (isLoading) {
    return <Skeleton size={6} m="xl" height={40} />;
  }

  return (
    <Box flex={1}>
      <Text px="xl" pb="xl" title="Perguntas frequentes" />
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.guidcontrol}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListItemAccordion title={item.pergunta} fontSize="3xl">
              <Text
                color="darkGrayGray78"
                title={item.resposta}
                p="xl"
                fontSize="2xl"
              />
            </ListItemAccordion>
          );
        }}
      />
    </Box>
  );
};
