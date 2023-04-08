import { CalendarProps } from "react-native-calendars";
import { TextInputProps } from "../TextInput/type";

export interface ICalendar
  extends CalendarProps,
    Omit<TextInputProps, "style"> {
  type?: "modal" | "fixed";
  activeDates?: string[];
  onChangeText: (value?: string) => void;
  isVisible?: boolean;
}
