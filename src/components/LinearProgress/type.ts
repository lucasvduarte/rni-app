import { LinearProgressProps as RNLinearProgressProps } from "@rneui/themed";
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  ShadowPropsType,
} from "../Ui/type";
import themes from "../../themes";

export interface LinearProgressProps
  extends SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    RNLinearProgressProps {
  color?: keyof typeof themes.light.colors;
  title?: string;
}
