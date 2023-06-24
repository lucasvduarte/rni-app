import {
  GestureResponderEvent,
  ImageProps as ImagePropsRN,
} from "react-native";
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
  ShadowPropsType,
  AnimatableProperties,
} from "../Ui/type";

export interface ImageProps
  extends ImagePropsRN,
    SpacingPropsType,
    BorderPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ShadowPropsType,
    AnimatableProperties<{}>,
    Pick<BackgroundPropsType, "bg">,
    Pick<FlexPropsType, "flex">,
    VariantPropsType {
  type?: "background" | "image" | "thumbnail";
  uri?: string;
  isVideo?: boolean;
  height?: number;
  width?: number;
  children?: React.ReactNode;
  onPressSecondy?: ((event: GestureResponderEvent) => void) | undefined;
}
