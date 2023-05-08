import React, { useLayoutEffect, useState } from "react";
import { BottomSheetProps } from "./type";
import { BottomSheet as RNBottomSheet } from "@rneui/themed";
import PDFReader from "rn-pdf-reader-js";
import { Box } from "../Box";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components/native";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { useDownload } from "../../hooks";
const { width, height } = Dimensions.get("window");

export const BottomSheet: React.FunctionComponent<BottomSheetProps> = (
  props
) => {
  const {
    children,
    visible = false,
    type,
    source,
    setVisible,
    shareData,
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useTheme();
  const { share } = useDownload();

  useLayoutEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  if (!type && !children && !shareData) {
    console.warn("children is required");
    return null;
  }

  if (shareData) {
    return (
      <Box>
        <Button
          title="Visualizar"
          onPress={() => setIsVisible(true)}
          type="outline"
          mb="xl"
        />
        {shareData?.base64 && (
          <Button
            title="Compartilhar"
            onPress={() => {
              share(
                shareData?.title || "",
                shareData?.mimetype,
                shareData?.base64
              );
            }}
          />
        )}
        <RNBottomSheet
          modalProps={{}}
          isVisible={isVisible}
          containerStyle={{
            backgroundColor: "transparent",
          }}
          onBackdropPress={() => setIsVisible(false)}
          {...props}
        >
          <Box h={height} bg="whiteBlack" alignItems="flex-end">
            <Icon
              type="material"
              name="close"
              size={30}
              iconColor="prussianBlueWhite"
              onPress={() => setIsVisible(false)}
              p="xl"
              pt="2xl"
              pb="2xl"
            />

            <PDFReader
              source={{ ...source }}
              style={{
                width,
                height: height,
              }}
              customStyle={{
                readerContainer: { backgroundColor: colors.whiteBlack },
                readerContainerDocument: {
                  backgroundColor: "transparent",
                  height: height,
                },
                readerContainerNumbers: {
                  backgroundColor: colors.transparent,
                },
                readerContainerZoomContainer: {
                  backgroundColor: colors.transparent,
                },
                readerContainerZoomContainerButton: {
                  color: colors.blackWhite,
                },
                readerContainerNumbersContent: {
                  color: colors.blackWhite,
                  backgroundColor: colors.veryLightGraySuvaGrey,
                },
              }}
              webviewStyle={{ backgroundColor: colors.whiteBlack }}
            />
          </Box>
        </RNBottomSheet>
      </Box>
    );
  }

  return (
    <RNBottomSheet
      modalProps={{}}
      isVisible={isVisible}
      containerStyle={{
        backgroundColor: "transparent",
      }}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
      {...props}
    >
      {children}
    </RNBottomSheet>
  );
};
