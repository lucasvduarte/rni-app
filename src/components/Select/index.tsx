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
  const { onChangeText, isVisible, listValues, title, value } = props;
  const [visible, setVisible] = useState(isVisible || false);
  const [valueSelect, setValueSelect] = useState<string | undefined>(value);

  const onPressSelect = (value: string) => {
    onChangeText(value || "");
    setValueSelect(value);
    setVisible(false);
  };

  return (
    <>
      <Pressable onPress={() => setVisible(true)} style={{ width: "100%" }}>
        <TextInput
          {...props}
          value={valueSelect || value}
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
        <Card borderRadius="lg" borderWidth={2}>
          {title && (
            <Text
              title={title}
              pb="sm"
              color="easternBlue"
              fontSize="3xl"
              fontWeight="bold"
            />
          )}
          <Box mt="md" pb="xl">
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
                    <Text
                      title={item.title}
                      color="matterhorn"
                      fontSize="3xl"
                    />
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
