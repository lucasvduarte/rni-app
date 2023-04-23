import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Box, Card, FlatList, Skeleton, Text } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getAttendance } from "../../service/Attendance";
import { AttendanceProps } from "../../../../navigation/private/types";

export const Attendance = ({ navigation }: AttendanceProps) => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getAttendance",
    queryFn: () => getAttendance(user?.cliente.cpfcnpj || ""),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  if (isLoading) {
    return <Skeleton m="xl" height={400} borderRadius="xl" />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={data?.data.records.filter(
          (item) =>
            item.assunto_portal__c !==
              "Assistência Técnica - Pesquisa Satisfação" &&
            item.assunto_portal__c !== "Assistência Técnica"
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              shadow="md"
              shadowColor="pantone"
              borderColor="pantone"
              onPress={() => {
                navigation.navigate("AttendanceDetails", {
                  data: item,
                });
              }}
            >
              <Text title="Titulo" color="moderateGreen" fontWeight="700" />
            </Card>
          );
        }}
      />
    </Box>
  );
};
