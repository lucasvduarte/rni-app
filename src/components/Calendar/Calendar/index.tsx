import React, { useMemo } from "react";
import { Calendar } from "react-native-calendars";
import { useTheme } from "styled-components/native";
import { ICalendar } from "../type";
import { formatDatePtBr } from "../../../config/utils";

export const CalendarStyle: React.FC<ICalendar> = (props) => {
  const { colors } = useTheme();
  const { initialDate = new Date().toISOString().split("T")[0], activeDates } =
    props;

  const formatMarkedDates = useMemo(() => {
    if (!activeDates) {
      return null;
    }
    let obj = {};
    activeDates.map((item) => {
      obj = {
        ...obj,
        [formatDatePtBr(item, true)]: {
          disabled: false,
          disableTouchEvent: false,
        },
      };
      return formatDatePtBr(item, true);
    });
    return obj;
  }, []);

  return (
    <Calendar
      theme={{
        calendarBackground: "transparent",
      }}
      markedDates={{
        ...formatMarkedDates,
        [initialDate]: {
          selected: true,
          selectedColor: colors.moderateGreen,
        },
      }}
      disabledByDefault={!!formatMarkedDates}
      disableAllTouchEventsForDisabledDays={!!formatMarkedDates}
      {...props}
    />
  );
};
