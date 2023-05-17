import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Skeleton,
  Calendar,
} from "../../../../../components";
import { SchedulingProps } from "../../../../../navigation/private/types";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { getScheduling } from "../../../service/TechnicalAssistance";
import { TScheduling } from "../../../service/TechnicalAssistance/type";
import { formatDatePtBr, formatDatePtBrHr } from "../../../../../config/utils";
import {
  addDays,
  comparatorDate,
  formatHr,
} from "../../../../../config/utils/format/data";
import { useTheme } from "styled-components/native";

export const Scheduling = ({ route, navigation }: SchedulingProps) => {
  const { colors } = useTheme();
  const { data } = route.params;
  const [selectedDate, setSelectedDate] = useState(
    addDays(new Date(), 2, true)
  );
  const [schedulingDate, setSchedulingDate] = useState<TScheduling | undefined>(
    undefined
  );

  const { data: dataScheduling, isLoading } = useQuery({
    queryKey: "getScheduling",
    queryFn: () => getScheduling(data.id),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const searcheDate = (date: string, listDates?: TScheduling[]) => {
    if (!listDates?.length) {
      return [];
    }
    return listDates.filter(
      (item) => formatDatePtBr(item.startTime, true) === date
    );
  };

  const onPress = () => {
    if (schedulingDate) {
      navigation.navigate("Responsible", {
        data,
        dataScheduling: dataScheduling?.data,
        schedulingDate,
      });
    }
  };

  if (isLoading) {
    return <Skeleton m="xl" height={400} borderRadius="xl" />;
  }

  return (
    <Box px="xl" mb="2lg" pt="xl" flex={1}>
      <Box flex={1}>
        <Calendar
          initialDate={selectedDate}
          minDate={addDays(new Date(), 2, true)}
          maxDate={addDays(new Date(), 45, true)}
          onChangeText={(day) => {
            setSelectedDate(day);
          }}
          activeDates={(
            dataScheduling?.data?.scheduling?.map((item) =>
              formatDatePtBr(item.startTime, true)
            ) || []
          ).filter((item) => {
            return comparatorDate(
              formatDatePtBr(item, true),
              addDays(new Date(), 2, true)
            );
          })}
          placeholder="Selecionar data"
          size="large"
        />
        <Box flexDir="row" flexWrap="wrap" justifyContent="flex-start" mb="lg">
          {!dataScheduling?.data?.case?.data_hora_do_agendamento_da_visita__c &&
            searcheDate(selectedDate, dataScheduling?.data?.scheduling).map(
              (item) => {
                const isSelect = schedulingDate?.startTime === item.startTime;
                return (
                  <Box w="50%" alignItems="center" my="sm" key={item.startTime}>
                    <Button
                      onPress={() => setSchedulingDate(item)}
                      title={formatHr(item.startTime)}
                      bg={isSelect ? "pantone" : "transparent"}
                      borderColor={colors.pantone as never}
                      borderWidth={1}
                      type={isSelect ? "solid" : "outline"}
                      size="md"
                      titleStyle={{
                        color: isSelect ? colors.white : colors.pantone,
                      }}
                    />
                  </Box>
                );
              }
            )}
        </Box>
        {!!dataScheduling?.data?.case
          ?.data_hora_do_agendamento_da_visita__c && (
          <Text
            title={`Data e hora disponivel: ${formatDatePtBrHr(
              dataScheduling?.data?.case?.data_hora_do_agendamento_da_visita__c,
              "às"
            )}`}
          />
        )}
      </Box>
      <Button
        title="Confirmar"
        onPress={onPress}
        loading={isLoading}
        disabled={
          isLoading ||
          (!schedulingDate &&
            !dataScheduling?.data?.case?.data_hora_do_agendamento_da_visita__c)
        }
      />
    </Box>
  );
};
