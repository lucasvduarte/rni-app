import React, { useState } from "react";
import { LocaleConfig } from "react-native-calendars";
import { Box } from "../Box";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { CalendarStyle } from "./Calendar";
import { configCalendar } from "./helper";
import { ICalendar } from "./type";
import { TextInput } from "../TextInput";
import { Pressable } from "react-native";
import { mask } from "react-native-mask-text";
LocaleConfig.locales["pt-BR"] = configCalendar;
LocaleConfig.defaultLocale = "pt-BR";

export const Calendar: React.FC<ICalendar> = (props) => {
  const {
    type = "modal",
    onChangeText,
    initialDate,
    isVisible,
    placeholder,
  } = props;
  const [visible, setVisible] = useState(isVisible || false);
  const [value, setValue] = useState(initialDate);
  const [valueSelect, setValueSelect] = useState<string | undefined>("");

  const onPressSelect = () => {
    onChangeText(value);
    setValueSelect(value);
    setVisible(false);
  };

  const onPressCancel = () => {
    setValue(valueSelect);
    setVisible(false);
  };

  if (type === "fixed") {
    return <CalendarStyle {...props} />;
  }

  return (
    <>
      {!!placeholder && (
        <Pressable onPress={() => setVisible(true)} style={{ width: "100%" }}>
          <TextInput
            {...props}
            value={valueSelect?.split("-").reverse().join("/")}
            disabled
            disabledInputStyle={{
              opacity: 1,
            }}
          />
        </Pressable>
      )}
      <Modal
        isVisible={visible}
        type="custom"
        onBackdropPress={(event) => setVisible(event)}
      >
        <CalendarStyle
          {...props}
          onDayPress={(day) => {
            setValue(day.dateString);
          }}
          initialDate={value}
        />
        <Box flexDir="row" mt="md">
          <Button
            title="Selecionar"
            size="sm"
            type="clear"
            onPress={onPressSelect}
          />
          <Button
            title="Cancelar"
            size="sm"
            type="clear"
            onPress={onPressCancel}
            ml="sm"
          />
        </Box>
      </Modal>
    </>
  );
};
