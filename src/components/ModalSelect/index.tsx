import React, { useLayoutEffect, useState } from "react";
import { ModalSelectProps } from "./type";
import { Text } from "../Text";
import { BottomSheet } from "../BottomSheet";
import { Card } from "../Card";
import {
  ListItem,
  ListItemContent,
  ListItemSubtitle,
  ListItemTitle,
} from "../ListItem";
import { CheckBox } from "../CheckBox";
import { Box } from "../Box";

export const ModalSelect: React.FunctionComponent<ModalSelectProps> = (
  props
) => {
  const {
    data,
    isVisible,
    title,
    valueSelect,
    onChangeSelect,
    titleClear,
    onBackdropPress,
  } = props;
  const [visible, setVisible] = useState(isVisible || false);

  useLayoutEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <BottomSheet
      visible={visible}
      onBackdropPress={() => {
        setVisible(false);
      }}
    >
      <Card mx="xl" mb="2xl" borderRadius="lg" shadow="md">
        <Text
          title={title}
          pb="md"
          color="easternBlue"
          fontSize="xl"
          fontWeight="bold"
        />

        {data.map((item, index) => {
          return (
            <ListItem
              topDivider={!!index}
              onPress={() => onChangeSelect(item)}
              px="md"
              py="lg"
              key={item.value}
            >
              <CheckBox
                checked={item.value === valueSelect}
                color="easternBlue"
                iconType="material-community"
                checkedIcon="circle"
                uncheckedIcon="circle-outline"
                disabled
              />
              <ListItemContent>
                <ListItemTitle>
                  <Text title={item.title} color="matterhorn" fontSize="md" />
                </ListItemTitle>
                {item.subTitle && (
                  <ListItemSubtitle>
                    <Text
                      title={item.subTitle}
                      color="suvaGrey"
                      fontSize="md"
                    />
                  </ListItemSubtitle>
                )}
              </ListItemContent>
            </ListItem>
          );
        })}
        {titleClear && (
          <Box justifyContent="flex-end" alignItems="flex-end">
            <Text
              title={titleClear}
              pt="lg"
              color="easternBlue"
              fontSize="xl"
              fontWeight="bold"
              onPress={() => onChangeSelect(undefined)}
            />
          </Box>
        )}
      </Card>
    </BottomSheet>
  );
};
