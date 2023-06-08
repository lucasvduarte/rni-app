import { CheckBoxProps } from "../CheckBox/type";

export interface CheckBoxListProps extends Omit<CheckBoxProps, "checked"> {
  value?: string;
  onChangeText: (value: string) => void;
  listValues: TListValues[];
  label?: string;
}
export type TListValues = {
  title: string;
  value: string;
};
