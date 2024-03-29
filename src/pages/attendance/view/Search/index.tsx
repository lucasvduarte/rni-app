import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Card, FlatList, Skeleton, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getSearch } from "../../service/Search";
import { SearchProps } from "../../../../navigation/private/types";
import { formatDatePtBr } from "../../../../config/utils";

export const Search = ({ navigation }: SearchProps) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getSearch",
    queryFn: () =>
      getSearch(user?.cliente.cpfcnpj || "", enterpriseSelect?.EMPCOD || ""),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton m="xl" height={400} />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={data?.data.result.filter(
          (item) => new Date(item.dtvigenciafim) >= new Date()
        )}
        keyExtractor={(item) => item.guidcontrol}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              shadow="md"
              shadowColor="moderateGreen"
              borderColor="veryLightGray"
              mb="lg"
              onPress={() => {
                navigation.navigate("SearchDetails", {
                  data: item,
                });
              }}
            >
              <Text
                title={item.titulo}
                color="moderateGreen"
                fontWeight="700"
              />
              <Text
                title={formatDatePtBr(item.criado)}
                color="darkGrayGray78"
                pt="sm"
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
