import { TextProps as RNTextProps } from "@rneui/themed";
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RadiusPropsType,
  VariantPropsType,
  AnimatableProperties,
  IconProps,
} from "../Ui/type";

export interface TextProps
  extends RNTextProps,
    SpacingPropsType,
    RadiusPropsType,
    BorderPropsType,
    TextPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    IconProps,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    VariantPropsType {
  title?: string | number;
}
