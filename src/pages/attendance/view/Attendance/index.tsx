import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  CardAttendance,
  FlatList,
  Skeleton,
  Text,
} from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getAttendance } from "../../service/Attendance";
import { AttendanceProps } from "../../../../navigation/private/types";
import { TAttendance } from "../../service/Attendance/type";

export const Attendance = ({ navigation }: AttendanceProps) => {
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getAttendance",
    queryFn: () => getAttendance(user?.cliente.cpfcnpj || ""),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const formatList = (value: TAttendance[] | undefined) => {
    if (!value) {
      return [];
    }
    if (user?.cliente.sindico) {
      return value;
    }

    return value.filter(
      (item) =>
        item.assunto_portal__c !==
          "Assistência Técnica - Pesquisa Satisfação" &&
        item.assunto_portal__c !== "Assistência Técnica" &&
        !item.description.includes("Download")
    );
  };

  if (isLoading) {
    return <Skeleton m="xl" size={6} height={100} />;
  }

  return (
    <Box px="xl" flex={1}>
      <Box alignItems="flex-end">
        <Text
          title="Solicitar atendimento"
          onPress={() => navigation.navigate("RegisterAttendance")}
          fontSize="3xl"
          fontWeight="bold"
          color="easternBlue"
          w={160}
        />
      </Box>
      <Text
        title="Finalizados"
        onPress={() => {
          navigation.navigate("AttendanceConcluded", {
            data: formatList(data?.data.records).filter(
              (item) => item.status.toLocaleLowerCase() === "concluído"
            ),
          });
        }}
        pt="xl"
        pb="sm"
        fontWeight="bold"
        w={80}
        fontSize="2xl"
      />
      <FlatList
        data={formatList(data?.data.records).filter(
          (item) => item.status.toLocaleLowerCase() !== "concluído"
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
                  isConcluded: false,
                });
              }}
            />
          );
        }}
      />
    </Box>
  );
};
