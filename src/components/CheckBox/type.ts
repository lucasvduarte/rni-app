import { CheckBoxProps as RNCheckBoxProps } from "@rneui/themed";
import {
  BackgroundPropsType,
  BorderPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  ShadowPropsType,
  SpacingPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from "../Ui/type";
import themes from "../../themes";

export interface CheckBoxProps
  extends RNCheckBoxProps,
    SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    VariantPropsType {
  color?: keyof typeof themes.light.colors;
}
