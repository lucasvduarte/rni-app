import { IconProps as RNIconProps } from "@rneui/themed";
import themes from "../../themes";
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
  ShadowPropsType,
  AnimatableProperties,
  PositionPropsType,
} from "../Ui/type";

export interface IconProps
  extends SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    PositionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    RNIconProps,
    VariantPropsType {
  colorStyle?: any;
  iconColor?: keyof typeof themes.light.colors;
}
