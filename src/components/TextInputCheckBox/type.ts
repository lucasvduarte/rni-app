import { TextInputProps } from "../TextInput/type";

export interface TextInputCheckBoxProps extends TextInputProps {
  onChangeText: (value: string) => void;
  valueChecked?: string;
  labelCheckBox?: string;
}
