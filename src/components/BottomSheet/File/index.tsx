import React from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { BottomSheet } from "..";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Card } from "../../Card";
import { TextInput } from "../../TextInput";
import { Image } from "../../Image";
import { TBottomSheetFile } from "./type";

export const BottomSheetFile: React.FunctionComponent<TBottomSheetFile> = (
  props
) => {
  const {
    visible,
    onBackdropPress,
    inputText,
    text,
    handleFile,
    file,
    setFile,
    loading,
    onPressConfirm,
  } = props;

  return (
    <BottomSheet
      visible={visible}
      onBackdropPress={() => onBackdropPress(false)}
    >
      <KeyboardAwareScrollView
        fadingEdgeLength={500}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        <Card pb="2xl" borderRadius="xl" pt={text?.title ? "none" : "2xl"}>
          {text?.title && (
            <Text
              color="easternBlue"
              fontSize="2xl"
              fontWeight="bold"
              pb="xl"
              {...text}
            />
          )}
          <TextInput size="large" multiline numberOfLines={4} {...inputText} />

          <Text
            title="Adicionar anexo"
            fontSize="3xl"
            pb="xl"
            onPress={handleFile}
            fontWeight="bold"
            color="easternBlue"
            w={120}
          />

          {file?.uri && (
            <Image
              source={{}}
              uri={file?.uri}
              borderRadius={8}
              resizeMode="cover"
              isVideo={file?.type.split("/")[0] === "video"}
              type="thumbnail"
              mb="xl"
              onPressSecondy={() => setFile(undefined)}
            />
          )}

          <Button
            title="Confirma"
            onPress={onPressConfirm}
            mt="2xl"
            isBold
            bg="moderateGreen"
            disabled={loading}
            loading={loading}
          />
          <Button
            title="Fechar"
            onPress={() => onBackdropPress(false)}
            mt="xl"
            type="outline"
            bg="moderateGreen"
            disabled={loading}
          />
        </Card>
      </KeyboardAwareScrollView>
    </BottomSheet>
  );
};
