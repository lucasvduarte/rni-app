import { GestureResponderEvent } from "react-native";
import themes from "../../themes";
import { TextProps } from "../Text/type";
import { VariantPropsType, TFontSize, IconType } from "../Ui/type";

export interface TextDescriptionProps extends TextProps, VariantPropsType {
  title: string | number;
  description: string | number;
  colorDescription?: keyof typeof themes.light.colors;
  fontSizeDescription?: TFontSize;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  iconTypeDescription?: IconType;
  iconSizeDescription?: number;
  iconNameDescription?: string;
  iconColorDescription?: keyof typeof themes.light.colors;
}
