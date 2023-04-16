import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  FlatList,
  ListItemAccordion,
  ListItemContent,
  ListItemTitle,
  Skeleton,
  Text,
} from "../../../../components";
import { getCommonQuestions } from "../../service/CommonQuestions";
import { useState } from "react";

export const CommonQuestions = () => {
  const [expanded, setExpanded] = useState(false);

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
    <Box m="xl">
      <Text title="Perguntas frequentes" />
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.guidcontrol}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListItemAccordion
              content={
                <ListItemContent>
                  <ListItemTitle>
                    <Text
                      title={item.pergunta}
                      textAlign="center"
                      color="blackSuvaGrey"
                      flex={1}
                    />
                  </ListItemTitle>
                </ListItemContent>
              }
              isExpanded={expanded}
              onPress={() => {
                setExpanded(!expanded);
              }}
            >
              <Text color="darkGray" title={item.resposta} p="xl" />
            </ListItemAccordion>
          );
        }}
      />
    </Box>
  );
};
