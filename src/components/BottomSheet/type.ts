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
import { PdfPropd } from "../Pdf";

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
    PdfPropd,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  children?: ReactNode;
  visible?: boolean;
  type?: "pdf";
  setVisible?: (value: boolean) => void;
  shareData?: {
    title: string;
    mimetype: string;
    base64: string;
  };
}
