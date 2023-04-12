import React, { useLayoutEffect, useState } from "react";
import { BottomSheetProps } from "./type";
import { BottomSheet as RNBottomSheet } from "@rneui/themed";

export const BottomSheet: React.FunctionComponent<BottomSheetProps> = (
  props
) => {
  const { children, visible = false } = props;
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(visible);
  }, [visible]);

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
