import { GestureResponderEvent } from "react-native";
import { Card } from "..";
import { Box } from "../../Box";
import { Text } from "../../Text";
import { TAttendance } from "../../../pages/attendance/service/Attendance/type";
import { formatDatePtBr, formatDatePtBrHr } from "../../../config/utils";
import { isSchedulingText, isConfirmSchedule, isToSchedule } from "./helps";

type TCardAttendance = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  onPressScheduleVisit?: ((event: GestureResponderEvent) => void) | undefined;
  onPressConfirm?: ((event: GestureResponderEvent) => void) | undefined;
  data: TAttendance;
};

export const CardAttendance = (props: TCardAttendance) => {
  const { onPress, onPressScheduleVisit, onPressConfirm, data } = props;

  return (
    <Card
      borderRadius="xl"
      shadow="sm"
      shadowColor="blackWhite"
      p="none"
      bg="moderateGreen"
      onPress={onPress}
      mb="lg"
    >
      <Box py="sm" px="xl">
        <Box flexDir="row" justifyContent="space-between">
          <Text title={data.status} color="white" fontSize="3xl" />
          <Text
            title={formatDatePtBr(data.createddate)}
            color="white"
            fontSize="2xl"
          />
        </Box>

        {isSchedulingText(data) && onPressScheduleVisit && (
          <Box flexDir="row" alignItems="flex-end" pt="xs">
            <Text
              title={`${
                isConfirmSchedule(data) ? "Agendamento disponível" : "Agendado"
              } para ${formatDatePtBrHr(
                data?.data_hora_do_agendamento_da_visita__c,
                "ás"
              )}`}
              color="prussianBlue"
              fontWeight="bold"
              fontSize="2xl"
              flex={1}
            />
          </Box>
        )}
      </Box>
      <Card
        borderRadius="lg"
        bg={
          data.visualizado_pelo_cliente__c ? "white" : "veryLightGraySuvaGrey"
        }
        borderWidth={0}
      >
        <Box
          flexDir="row"
          justifyContent="space-between"
          alignItems="flex-end"
          mt="-md"
        >
          <Text
            title={data.assunto_portal__c}
            color="prussianBlue"
            fontWeight="bold"
            fontSize="3xl"
            flex={1}
          />
          <Text
            title={data.casenumber}
            color="moderateGreen"
            pt="sm"
            fontSize="3xl"
          />
        </Box>
        <Text
          title={`${data.contrato__r?.Empreendimento__r?.Empreendimento__c} - ${data.contrato__r?.Torre_Quadra__r?.Name} ${data.contrato__r?.Unidade__r?.Name}`}
          color="prussianBlue"
          py="sm"
          fontSize="2xl"
        />

        {data.description && (
          <Text title={data.description} fontSize="xl" color="darkGrayGray78" />
        )}
        <Box flexDir="row" justifyContent="space-between">
          {onPressScheduleVisit &&
            isToSchedule(data) &&
            !isConfirmSchedule(data) && (
              <Text
                title="Agendar visita técnica"
                color="pantone"
                onPress={onPressScheduleVisit}
                mt="sm"
                fontSize="3xl"
              />
            )}

          {onPressConfirm && isConfirmSchedule(data) && (
            <Text
              title="Confirma"
              color="pantone"
              onPress={onPressConfirm}
              mt="sm"
              fontSize="3xl"
              w={70}
            />
          )}
        </Box>
      </Card>
    </Card>
  );
};
