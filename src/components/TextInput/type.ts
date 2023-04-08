import { InputProps } from "@rneui/themed";
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
  SizeProps,
  TextPropsType,
} from "../Ui/type";

export interface TextInputProps
  extends SpacingPropsType,
    RadiusPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    InputProps,
    BackgroundPropsType,
    Pick<TextPropsType, "color">,
    Pick<FlexPropsType, "flex">,
    VariantPropsType {
  size?: SizeProps;
}
