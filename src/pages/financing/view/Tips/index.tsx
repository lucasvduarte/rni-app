import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Card, Carousel, Text } from "../../../../components";
import { getTips } from "../../services/Tips";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

export const TipsFinancing = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getTips",
    queryFn: () => getTips(),
    onError: (error) => {
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
      <Text
        title="Seguem algumas informações que vão ajudá-lo no seu financiamento"
        color="darkGray"
        fontSize={18}
        m="xl"
      />
      <Carousel
        data={data?.data.result}
        renderItem={({ item }) => {
          return (
            <Card
              alignItems="center"
              mx="xl"
              borderRadius="xl"
              shadow="sm"
              mb="sm"
            >
              <Box w={width - 64}>
                <Text title={item.texto} color="darkGray" fontSize={18} />
                <Text
                  title={item.titulo}
                  color="darkGray"
                  fontSize={18}
                  mt="lg"
                />
              </Box>
            </Card>
          );
        }}
      />
    </Box>
  );
};
