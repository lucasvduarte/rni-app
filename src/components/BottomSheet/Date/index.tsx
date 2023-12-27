import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { BottomSheet } from "..";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Card } from "../../Card";
import { TextInput } from "../../TextInput";
import { TBottomSheetDate } from "./type";
import { Calendar } from "../../Calendar";
import { Select } from "../../Select";

export const BottomSheetDate: React.FunctionComponent<TBottomSheetDate> = (
  props
) => {
  const [visible, setVisible] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { inputText, text, loading, onSubmit, select } = props;

  useEffect(() => {
    if (!loading) {
      setVisible(false);
    }
  }, [loading]);

  return (
    <>
      {text?.title && (
        <Text
          color="easternBlue"
          fontSize="2xl"
          fontWeight="bold"
          {...text}
          onPress={() => setVisible(true)}
          py="sm"
          w="60%"
        />
      )}
      <BottomSheet visible={visible} onBackdropPress={() => setVisible(false)}>
        <KeyboardAwareScrollView
          fadingEdgeLength={500}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        >
          <Card pb="2xl" borderRadius="xl" pt="xl">
            {inputText?.label && (
              <TextInput
                size="large"
                {...inputText}
                onChangeText={(value) => setInputValue(value)}
                value={inputValue}
              />
            )}

            {select?.listValues && (
              <Select
                {...select}
                listValues={select?.listValues}
                onChangeText={(value) => setInputValue(value)}
                value={inputValue}
              />
            )}

            <Calendar
              type="fixed"
              onChangeText={(value) => setSelectDate(value)}
              value={selectDate}
              initialDate={selectDate}
            />

            <Button
              title="Confirma"
              onPress={() => onSubmit(inputValue, selectDate)}
              mt="2xl"
              isBold
              bg="moderateGreen"
              disabled={loading}
              loading={loading}
            />
            <Button
              title="Fechar"
              onPress={() => setVisible(false)}
              mt="xl"
              type="outline"
              bg="moderateGreen"
              disabled={loading}
            />
          </Card>
        </KeyboardAwareScrollView>
      </BottomSheet>
    </>
  );
};
