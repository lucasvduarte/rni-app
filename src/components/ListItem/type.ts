import { ListItemProps as RNListItemProps } from "@rneui/themed";
import {
  BackgroundPropsType,
  OpacityPropsType,
  ZIndexPropsType,
  SpacingPropsType,
  VariantPropsType,
  AnimatableProperties,
  BorderPropsType,
  DimensionPropsType,
  FlexPropsType,
  OverflowPropsType,
  ShadowPropsType,
} from "../Ui/type";

export interface ListItemProps
  extends SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    RNListItemProps,
    VariantPropsType {}
