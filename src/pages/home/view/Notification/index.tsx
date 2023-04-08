import { Box, Cards, Text } from "../../../../components";
import { NotificationProps } from "../../../../navigation/private/types";

export const Notification = ({ navigation }: NotificationProps) => {
  return (
    <Box m="xl" flex={1}>
      {/*<Calendar
        onChangeText={(day) => {
          console.log(day);
        }}
        isVisible={true}
      />*/}
      <Box flex={1}>
        <Cards
          borderRadius="xl"
          shadow="sm"
          shadowColor="blackWhite"
          p="none"
          bg="moderateGreen"
          onPress={() =>
            navigation.navigate("Notification", {
              data: {},
              isTechnicalVisit: false,
            })
          }
        >
          <Box flexDir="row" pl="xl" pt="md" pb="sm">
            <Text title="Agendado para:" color="white" />
            <Text
              title="05/02/2023 - 09:00h"
              color="prussianBlue"
              pl="lg"
              fontWeight="700"
            />
          </Box>

          <Cards borderRadius="xl" bg="whiteDarkGray" borderWidth={0}>
            <Box flexDir="row" justifyContent="space-between">
              <Text
                title="Tiago Luis Quemelo"
                color="prussianBlueWhite"
                fontWeight="700"
              />
              <Text
                title="005584482"
                color="moderateGreen"
                pt="sm"
                fontSize="3xl"
              />
            </Box>
            <Text
              title="I394 - Bloco A 0074"
              color="prussianBlueWhite"
              mb="sm"
            />
          </Cards>
        </Cards>
      </Box>
    </Box>
  );
};