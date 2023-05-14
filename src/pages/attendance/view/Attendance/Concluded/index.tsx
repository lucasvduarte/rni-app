import { Box, CardAttendance, FlatList } from "../../../../../components";
import { AttendanceConcludedProps } from "../../../../../navigation/private/types";

export const AttendanceConcluded = ({
  route,
  navigation,
}: AttendanceConcludedProps) => {
  const { data } = route.params;

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={data}
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
                  isConcluded: true,
                });
              }}
            />
          );
        }}
      />
    </Box>
  );
};
