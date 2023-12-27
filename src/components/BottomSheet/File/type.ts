import { GestureResponderEvent } from "react-native";
import { TextInputProps } from "../../TextInput/type";
import { TextProps } from "../../Text/type";

export type TBottomSheetFile = {
  visible: boolean;
  onBackdropPress: (value: boolean) => void;
  inputText?: TextInputProps;
  text?: TextProps;
  handleFile?: ((event: GestureResponderEvent) => void) | undefined;
  file: TFile | undefined;
  setFile: (value: any) => void;
  loading: boolean;
  onPressConfirm: ((event: GestureResponderEvent) => void) | undefined;
};

export type TFile = {
  uri?: string;
  filename: string;
  arquivo: string;
  type: string;
  pasta: string;
};
