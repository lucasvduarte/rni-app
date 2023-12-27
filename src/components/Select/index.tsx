import React, { useState } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { ISelect } from "./type";
import { TextInput } from "../TextInput";
import { Pressable, View } from "react-native";
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
    setTimeoutVisible();
  };

  const setTimeoutVisible = () => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      clearTimeout(timeoutId);
    }, 500);
  };

  return (
    <View
      style={{
        zIndex: 999,
        flex: 1,
      }}
    >
      <Pressable
        onPress={() => setVisible(true)}
        style={{
          width: "100%",
          zIndex: 99999,
          elevation: 2,
        }}
      >
        <TextInput
          {...props}
          value={valueSelect || value}
          disabled
          disabledInputStyle={{
            opacity: 1,
            zIndex: -999,
          }}
          placeholder="Selecione"
          style={{ zIndex: -9999 }}
          inputStyle={{ zIndex: -9999 }}
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
    </View>
  );
};
