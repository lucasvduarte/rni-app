import { WebView, WebViewProps } from "react-native-webview";
import { Indicator } from "./style";
import { Box } from "../Box";

export const WebViewPage = (props: WebViewProps) => {
  const indicatorLoadingView = () => {
    return <Indicator />;
  };

  return (
    <Box flex={1} bg="transparent">
      <WebView
        startInLoadingState={true}
        renderLoading={indicatorLoadingView}
        originWhitelist={["*"]}
        scalesPageToFit
        {...props}
      />
    </Box>
  );
};
