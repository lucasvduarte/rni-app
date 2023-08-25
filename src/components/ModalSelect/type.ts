import { ReactNode } from "react";
import {
  BackgroundPropsType,
  OpacityPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
} from "../Ui/type";

export type TDataModalSelect = {
  title: string;
  value: string | number;
  subTitle?: string | number;
};

export interface ModalSelectProps
  extends SpacingPropsType,
    BorderPropsType,
    OpacityPropsType,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  data: TDataModalSelect[];
  children?: ReactNode;
  isVisible: boolean;
  title?: string;
  valueSelect?: string | number;
  onChangeSelect: (value?: TDataModalSelect) => void;
  titleClear?: string;
  onBackdropPress?: (event: boolean) => void;
}
