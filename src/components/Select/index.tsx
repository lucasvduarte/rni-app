import React, { useState } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { ISelect } from "./type";
import { TextInput } from "../TextInput";
import { Pressable } from "react-native";
import { CheckBox } from "../CheckBox";
import { ListItem, ListItemContent, ListItemTitle } from "../ListItem";
import { Card } from "../Card";
import { BottomSheet } from "../BottomSheet";

export const Select: React.FC<ISelect> = (props) => {
  const { onChangeText, isVisible, placeholder, listValues, title } = props;
  const [visible, setVisible] = useState(isVisible || false);
  const [valueSelect, setValueSelect] = useState<string | undefined>(undefined);

  const onPressSelect = (value: string) => {
    onChangeText(value);
    setValueSelect(value);
    setVisible(false);
  };

  return (
    <>
      {placeholder && (
        <Text title={placeholder} fontSize="xl" pb="xs" fontWeight="bold" />
      )}

      <Pressable onPress={() => setVisible(true)} style={{ width: "100%" }}>
        <TextInput
          {...props}
          value={valueSelect}
          disabled
          disabledInputStyle={{
            opacity: 1,
          }}
          placeholder="Selecione"
        />
      </Pressable>

      <BottomSheet
        visible={visible}
        onBackdropPress={() => {
          setVisible(false);
        }}
      >
        <Card mx="xs" mb="sm" borderRadius="lg" shadow="md">
          {title && (
            <Text
              title={title}
              pb="md"
              color="easternBlue"
              fontSize="xl"
              fontWeight="bold"
            />
          )}
          <Box mt="md">
            {listValues.map((item, index) => (
              <ListItem
                topDivider={!!index}
                onPress={() => onPressSelect(item.value)}
                px="md"
                py="lg"
                key={item.title}
              >
                <CheckBox
                  checked={valueSelect === item.value}
                  color="easternBlue"
                  iconType="material-community"
                  checkedIcon="circle"
                  uncheckedIcon="circle-outline"
                  disabled
                />
                <ListItemContent>
                  <ListItemTitle>
                    <Text title={item.title} color="matterhorn" fontSize="lg" />
                  </ListItemTitle>
                </ListItemContent>
              </ListItem>
            ))}
          </Box>
        </Card>
      </BottomSheet>
    </>
  );
};
