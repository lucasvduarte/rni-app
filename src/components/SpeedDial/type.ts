import { VariantPropsType } from "../Ui/type";

export type TDataSpeedDial = {
  title: string;
  icon: string;
  onPress: () => void;
  visible?: boolean;
};

export interface SpeedDialProps extends VariantPropsType {
  data: TDataSpeedDial[];
  icon?: string;
}
