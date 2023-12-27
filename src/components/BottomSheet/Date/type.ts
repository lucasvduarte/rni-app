import { TextInputProps } from "../../TextInput/type";
import { TextProps } from "../../Text/type";
import { ISelect } from "../../Select/type";

export type TBottomSheetDate = {
  inputText?: TextInputProps;
  text?: TextProps;
  loading: boolean;
  onSubmit: (valueInput: string, selectDate: string) => void;
  select?: Partial<ISelect>;
};
