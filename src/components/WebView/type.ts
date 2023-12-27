import { WebViewProps } from "react-native-webview";
import { VariantPropsType } from "../Ui/type";
import { ButtonProps } from "../Button/type";

export interface IWebViewProps extends WebViewProps, VariantPropsType {
  save?: boolean;
  saveTitle?: string;
  isShare?: boolean;
  shareTitle?: string;
  buttonProps?: ButtonProps;
}
