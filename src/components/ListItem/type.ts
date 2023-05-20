import {
  ListItemProps as RNListItemProps,
  ListItemAccordionProps as RNListItemAccordionProps,
} from "@rneui/themed";
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
  TextPropsType,
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

export interface ListItemAccordionProps
  extends SpacingPropsType,
    SpacingPropsType,
    BorderPropsType,
    TextPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    RNListItemAccordionProps,
    VariantPropsType {
  title: string;
  description?: string;
}
