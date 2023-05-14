import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import {
  Box,
  Text,
  CardAttendance,
  FlatList,
  Skeleton,
} from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getAttendance } from "../../service/Attendance";
import { TechnicalAssistanceProps } from "../../../../navigation/private/types";
import { TAttendance } from "../../service/Attendance/type";

export const TechnicalAssistance = ({
  navigation,
}: TechnicalAssistanceProps) => {
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

  const formatList = (value: TAttendance[] | undefined) => {
    if (!value) {
      return [];
    }
    return value.filter(
      (item) =>
        item.assunto_portal__c !==
          "Assistência Técnica - Pesquisa Satisfação" &&
        item.assunto_portal__c === "Assistência Técnica"
    );
  };

  if (isLoading) {
    return <Skeleton m="xl" size={6} height={100} borderRadius="xl" />;
  }

  return (
    <Box px="xl" flex={1}>
      <Text
        title="Solicitar atendimento"
        onPress={() => navigation.navigate("TechnicalAssistanceCategory")}
        textAlign="right"
        fontSize="3xl"
        fontWeight="bold"
        color="easternBlue"
      />
      <Text
        title="Finalizados"
        py="xl"
        onPress={() => {
          navigation.navigate("TechnicalAssistanceConcluded", {
            data: formatList(data?.data.records).filter(
              (item) => item.status.toLocaleLowerCase() === "concluído"
            ),
          });
        }}
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
                navigation.navigate("TechnicalAssistanceDetails", {
                  data: item,
                  isConcluded: false,
                });
              }}
              onPressScheduleVisit={() => {}}
              onPressConfirm={() => {}}
            />
          );
        }}
      />
    </Box>
  );
};
