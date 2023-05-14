import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import {
  BackgroundPropsType,
  OpacityPropsType,
  BorderPropsType,
  SpacingPropsType,
  VariantPropsType,
} from "../Ui/type";

export interface ModalProps
  extends SpacingPropsType,
    BorderPropsType,
    OpacityPropsType,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  children?: ReactNode;
  isVisible: boolean;
  type?: "dialog" | "action" | "custom";
  title?: string;
  titleBody?: string;
  titleOnPressPrimary?: string;
  titleOnPressSecondary?: string;
  onPressPrimary?: ((event: GestureResponderEvent) => void) | undefined;
  onPressSecondary?: ((event: GestureResponderEvent) => void) | undefined;
  onBackdropPress?: (event: boolean) => void;
}
