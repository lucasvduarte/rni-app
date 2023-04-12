import { DividerProps as RNDividerProps } from "@rneui/themed";
import {
  BackgroundPropsType,
  OpacityPropsType,
  ZIndexPropsType,
  SpacingPropsType,
  VariantPropsType,
} from "../Ui/type";
import themes from "../../themes";

export interface DividerProps
  extends SpacingPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Pick<BackgroundPropsType, "bg">,
    RNDividerProps,
    VariantPropsType {
  colorDivider?: keyof typeof themes.light.colors;
}
