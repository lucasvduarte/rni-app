import React, { useLayoutEffect, useState } from "react";
import { Dialog } from "@rneui/themed";
import { ModalProps } from "./type";
import { Text } from "../Text";
import { GestureResponderEvent } from "react-native";
import { DialogStyled } from "./style";
import { useTheme } from "styled-components/native";

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
  const { colors } = useTheme();

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
      <DialogStyled
        isVisible={visible}
        onBackdropPress={toggleDialog}
        bg={colors.whiteDarkGray as never}
      >
        {children}
      </DialogStyled>
    );
  }

  if (type === "dialog") {
    return (
      <DialogStyled
        isVisible={visible}
        onBackdropPress={toggleDialog}
        bg={colors.whiteDarkGray as never}
      >
        <Dialog.Title title={title} titleStyle={{ color: colors.blackWhite }} />
        {titleBody && <Text title={titleBody} color="blackWhite" />}
      </DialogStyled>
    );
  }

  return (
    <DialogStyled
      isVisible={visible}
      onBackdropPress={toggleDialog}
      bg={colors.whiteDarkGray as never}
    >
      <Dialog.Title title={title} titleStyle={{ color: colors.blackWhite }} />
      {titleBody && <Text title={titleBody} color="blackWhite" />}
      <Dialog.Actions>
        <Dialog.Button title={titleOnPressPrimary} onPress={onPressPrimary} />
        {onPressSecondary && (
          <Dialog.Button
            title={titleOnPressSecondary}
            onPress={toggleOnPressSecondary}
          />
        )}
      </Dialog.Actions>
    </DialogStyled>
  );
};
