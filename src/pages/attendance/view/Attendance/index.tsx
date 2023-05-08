import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  CardAttendance,
  FlatList,
  Skeleton,
} from "../../../../components";
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
    return <Skeleton m="xl" size={6} height={100} borderRadius="xl" />;
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
            <CardAttendance
              data={item}
              onPress={() => {
                navigation.navigate("AttendanceDetails", {
                  data: item,
                });
              }}
            />
          );
        }}
      />
    </Box>
  );
};
