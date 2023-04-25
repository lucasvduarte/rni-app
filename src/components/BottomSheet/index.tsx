import React, { useLayoutEffect, useState } from "react";
import { BottomSheetProps } from "./type";
import { BottomSheet as RNBottomSheet } from "@rneui/themed";
import PDFReader from "rn-pdf-reader-js";
import { Box } from "../Box";
import { Dimensions } from "react-native";
import { Button } from "../Button";
import { useTheme } from "styled-components/native";
import { Icon } from "../Icon";
const { width, height } = Dimensions.get("window");

export const BottomSheet: React.FunctionComponent<BottomSheetProps> = (
  props
) => {
  const { children, visible = false, type, source, setVisible } = props;
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useTheme();
  useLayoutEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  if (!type && !children) {
    console.warn("children is required");
    return null;
  }

  if (type === "pdf") {
    return (
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
            onPress={() => setVisible && setVisible(false)}
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
