import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Card, Carousel, Skeleton, Text } from "../../../../components";
import { getStep } from "../../services/Step";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

export const Step = () => {
  const { data, isLoading } = useQuery({
    queryKey: "getStep",
    queryFn: () => getStep(),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton m="xl" size={2} listHeight={[80, 400]} />;
  }

  return (
    <Box>
      <Text
        title="O momento do financiamento é muito importante na compra do seu imóvel!
        Veja abaixo os principais passos para este momento:"
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
