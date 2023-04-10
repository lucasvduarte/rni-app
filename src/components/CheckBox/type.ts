import { CheckBoxProps as RNCheckBoxProps } from "@rneui/themed";
import { BackgroundPropsType, VariantPropsType } from "../Ui/type";
import themes from "../../themes";

export interface CheckBoxProps
  extends RNCheckBoxProps,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {
  color?: keyof typeof themes.light.colors;
}
