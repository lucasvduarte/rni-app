import { CheckBoxProps as RNCheckBoxProps } from "@rneui/themed";
import { BackgroundPropsType, VariantPropsType } from "../Ui/type";

export interface CheckBoxProps
  extends RNCheckBoxProps,
    Pick<BackgroundPropsType, "bg">,
    VariantPropsType {}
