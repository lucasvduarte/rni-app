import { WebView } from "react-native-webview";
import { Indicator } from "./style";
//import { captureRef } from "react-native-view-shot";
import { useRef } from "react";
//import * as MediaLibrary from "expo-media-library";
//import { Button } from "../Button";
import { IWebViewProps } from "./type";
import { View } from "react-native";
import { Box } from "../Box";
//import Toast from "react-native-toast-message";
import { useDownload } from "../../hooks";

export const WebViewPage = (props: IWebViewProps) => {
  const { save, saveTitle, isShare, shareTitle, buttonProps } = props;
  const imageRef = useRef<any>();
  const { share } = useDownload();
  /*
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        Toast.show({
          type: "success",
          text2: "Imagem salva na galeria",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onPressShare = async () => {
    const base64 = await captureRef(imageRef, {
      height: 440,
      quality: 1,
      format: "png",
      result: "base64",
    });
    share(shareTitle || "documento", "jpg", base64);
  };
  */
  const indicatorLoadingView = () => {
    return <Indicator />;
  };

  return (
    <Box flex={1} w="100%">
      <View style={{ flex: 1, width: "100%" }} ref={imageRef}>
        <WebView
          startInLoadingState={true}
          renderLoading={indicatorLoadingView}
          originWhitelist={["*"]}
          scalesPageToFit
          {...props}
        />
      </View>
      {/*isShare && (
        <Button
          title="Compartilhar"
          onPress={onPressShare}
          pt="md"
          pb="2lg"
          px="xl"
          type="clear"
          isBold
        />
      )*/}
      {/*save && (
        <Button
          title={saveTitle || "Salvar Documento"}
          onPress={onSaveImageAsync}
          pt="md"
          pb="2lg"
          px="xl"
          isBold
          bg="moderateGreen"
          {...buttonProps}
        />
      )*/}
    </Box>
  );
};
