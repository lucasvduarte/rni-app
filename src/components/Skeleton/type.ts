import { SkeletonProps as RNSkeletonProps } from "@rneui/themed";
import {
  DimensionPropsType,
  FlexPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
} from "../Ui/type";

export interface SkeletonProps
  extends SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    FlexPropsType,
    RNSkeletonProps,
    VariantPropsType {
  size?: number;
  listWidth?: number[];
  listHeight?: number[];
}
