import { SkeletonProps as RNSkeletonProps } from "@rneui/themed";
import {
  DimensionPropsType,
  FlexPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
  RadiusPropsType,
} from "../Ui/type";

export interface SkeletonProps
  extends SpacingPropsType,
    BorderPropsType,
    RadiusPropsType,
    DimensionPropsType,
    FlexPropsType,
    RNSkeletonProps,
    VariantPropsType {
  size?: number;
  listWidth?: number[];
  listHeight?: number[];
}
