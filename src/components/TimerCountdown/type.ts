import { TextProps } from "../Text/type";
import { VariantPropsType } from "../Ui/type";

export interface TimerCountdownProps extends TextProps, VariantPropsType {
  seconds?: number;
  isFinal: (value: boolean) => void;
  reset?: boolean;
  title?: string;
}
