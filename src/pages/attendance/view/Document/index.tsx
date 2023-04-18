import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { Box, Card, FlatList, Skeleton, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postDocuments } from "../../service/Document";
import { DocumentAttendanceProps } from "../../../../navigation/private/types";
import { formateLisDocument } from "./helps";

export const DocumentAttendance = ({ navigation }: DocumentAttendanceProps) => {
  const { enterpriseSelect, user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, data, isLoading } = useMutation({
    mutationFn: () =>
      postDocuments(
        user?.cliente.sindico
          ? "Manual do Condomínio"
          : "Manual do Proprietário",
        enterpriseSelect?.EMPCOD || ""
      ),
    onError: () => {
      Toast.show({
        type: "error",
      });
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Skeleton size={4} height={60} mx="xl" my="lg" />;
  }

  return (
    <Box flex={1}>
      <FlatList
        data={data?.data.data[0].data[0].pastas}
        keyExtractor={(item) => item.sr_id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
        }}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              borderWidth={1}
              shadow="sm"
              my="lg"
              onPress={() =>
                navigation.navigate("DocumentDetailsProperty", { data: item })
              }
            >
              <Text
                title={item.vc_descricao}
                fontWeight="700"
                iconName="download-box"
                iconSize={30}
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
