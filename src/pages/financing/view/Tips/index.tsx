import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Card, Carousel, Skeleton, Text } from "../../../../components";
import { getTips } from "../../services/Tips";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

export const TipsFinancing = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getTips",
    queryFn: () => getTips(),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton m="xl" size={2} listHeight={[40, 400]} />;
  }

  return (
    <Box>
      <Text
        title="Seguem algumas informações que vão ajudá-lo no seu financiamento"
        color="darkGrayGray78"
        fontSize="3xl"
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
              borderColor="veryLightGray"
              mb="sm"
            >
              <Box w={width - 64}>
                <Text
                  title={item.texto}
                  color="darkGrayGray78"
                  fontSize="3xl"
                />
                <Text
                  title={item.titulo}
                  color="darkGrayGray78"
                  fontSize="3xl"
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
