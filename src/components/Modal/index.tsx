import React, { useLayoutEffect, useState } from "react";
import { Dialog } from "@rneui/themed";
import { ModalProps } from "./type";
import { Text } from "../Text";
import { GestureResponderEvent } from "react-native";

export const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const {
    isVisible,
    type = "action",
    children,
    title,
    titleBody,
    onPressPrimary,
    onPressSecondary,
    titleOnPressPrimary = "OK",
    titleOnPressSecondary = "Fechar",
    onBackdropPress,
  } = props;
  const [visible, setVisible] = useState(isVisible || false);

  useLayoutEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  if (type === "action" && !onPressPrimary) {
    console.warn("onPressPrimary is required");
    return null;
  }

  if ((type === "dialog" || type === "action") && !title) {
    console.warn("title is required");
    return null;
  }

  if (type === "dialog" && !titleBody) {
    console.warn("titleBody is required");
    return null;
  }

  const toggleDialog = () => {
    setVisible((previus) => !previus);
    if (onBackdropPress) {
      onBackdropPress(false);
    }
  };

  const toggleOnPressSecondary = (event?: GestureResponderEvent) => {
    setVisible(false);
    if (onPressSecondary && event) {
      onPressSecondary(event);
    }
    return null;
  };

  if (type === "custom") {
    return (
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        {children}
      </Dialog>
    );
  }

  if (type === "dialog") {
    return (
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title={title} />
        <Text title={titleBody} />
      </Dialog>
    );
  }

  return (
    <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
      <Dialog.Title title={title} />
      {titleBody && <Text title={titleBody} />}
      <Dialog.Actions>
        <Dialog.Button title={titleOnPressPrimary} onPress={onPressPrimary} />
        <Dialog.Button
          title={titleOnPressSecondary}
          onPress={toggleOnPressSecondary}
        />
      </Dialog.Actions>
    </Dialog>
  );
};
