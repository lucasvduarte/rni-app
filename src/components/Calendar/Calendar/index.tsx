import React from "react";
import { Calendar } from "react-native-calendars";
import { useTheme } from "styled-components/native";
import { ICalendar } from "../type";

export const CalendarStyle: React.FC<ICalendar> = (props) => {
  const { colors } = useTheme();
  const { initialDate = new Date().toISOString().split("T")[0] } = props;

  return (
    <Calendar
      theme={{
        calendarBackground: "transparent",
      }}
      markedDates={{
        [initialDate]: {
          selected: true,
          selectedColor: colors.moderateGreen,
        },
      }}
      {...props}
    />
  );
};
