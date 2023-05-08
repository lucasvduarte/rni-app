import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import { BottomSheetProps as RnBottomSheetProps } from "@rneui/themed";
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

export interface BottomSheetProps
  extends SpacingPropsType,
    RnBottomSheetProps,
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
  visible?: boolean;
  type?: "pdf";
  source?: {
    uri?: string;
    base64?: string;
    headers?: {
      [key: string]: string;
    };
  };
  setVisible?: (value: boolean) => void;
  shareData?: {
    title: string;
    mimetype: string;
    base64: string;
  };
}
