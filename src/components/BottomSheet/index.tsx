import React, { useLayoutEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetProps } from "./type";
import { Button } from "../Button";
import { BottomSheet as RNBottomSheet } from "@rneui/themed";

export const BottomSheet: React.FunctionComponent<BottomSheetProps> = (
  props
) => {
  const { children, visible = false, isOnBackdropPress = true } = props;
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <SafeAreaProvider>
      <Button title="Open Bottom Sheet" onPress={() => setIsVisible(true)} />
      <RNBottomSheet
        modalProps={{}}
        isVisible={isVisible}
        onBackdropPress={() => {
          if (isOnBackdropPress) setIsVisible(false);
        }}
        {...props}
        containerStyle={{
          backgroundColor: "transparent",
        }}
      >
        {children}
      </RNBottomSheet>
    </SafeAreaProvider>
  );
};
