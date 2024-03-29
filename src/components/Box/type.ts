import { ReactNode } from "react";
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RadiusPropsType,
  VariantPropsType,
  ShadowPropsType,
  AnimatableProperties,
  PositionPropsType,
} from "../Ui/type";
import { GestureResponderEvent } from "react-native";

export interface BoxProps
  extends SpacingPropsType,
    RadiusPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    FlexPropsType,
    PositionPropsType,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
