import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
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
} from "../Ui/type";

export interface ModalProps
  extends SpacingPropsType,
    RadiusPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    FlexPropsType,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  children?: ReactNode;
  isVisible: boolean;
  type?: "dialog" | "action" | "custom";
  title?: string;
  titleBody?: string;
  titleOnPressPrimary?: string;
  titleOnPressSecondary?: string;
  onPressPrimary?: ((event: GestureResponderEvent) => void) | undefined;
  onPressSecondary?: ((event: GestureResponderEvent) => void) | undefined;
  onBackdropPress?: (event: boolean) => void;
}
