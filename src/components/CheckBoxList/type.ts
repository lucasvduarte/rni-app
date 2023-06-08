import { CheckBoxProps } from "../CheckBox/type";

export interface CheckBoxListProps extends Omit<CheckBoxProps, "checked"> {
  value?: string;
  onChangeText: (value: string) => void;
  listValues: TListValues[];
  title?: string;
}
export type TListValues = {
  title: string;
  value: string;
};
