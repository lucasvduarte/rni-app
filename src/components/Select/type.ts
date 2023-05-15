import { TextInputProps } from "../TextInput/type";

export interface ISelect extends Omit<TextInputProps, "style"> {
  activeDates?: string[];
  onChangeText: (value?: string) => void;
  isVisible?: boolean;
  listValues: TListValues[];
  title?: string;
}
export type TListValues = {
  title: string;
  value: string;
};
