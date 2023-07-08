import React, { useLayoutEffect, useState } from "react";
import { BottomSheetProps } from "./type";
import { BottomSheet as RNBottomSheet } from "@rneui/themed";
import { Box } from "../Box";
import { Dimensions } from "react-native";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { useDownload } from "../../hooks";
import { Pdf } from "../Pdf";
const { height } = Dimensions.get("window");

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

            <Pdf source={{ ...source }} />
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
