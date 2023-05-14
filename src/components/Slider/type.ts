import { BoxProps } from "../Box/type";
import { VariantPropsType } from "../Ui/type";

export interface SlidersProps extends VariantPropsType, BoxProps {
  title: string;
  value: number;
  onValueChange: (value: number) => void;
  maximumValue?: number;
  minimumValue?: number;
}
