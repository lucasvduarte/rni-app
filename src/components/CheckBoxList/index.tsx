import { CheckBox } from "../CheckBox";
import { CheckBoxListProps } from "./type";
import { Text } from "../Text";
import { useMemo } from "react";
import { Box } from "../Box";

export const CheckBoxList = (props: CheckBoxListProps) => {
  const { label, listValues, value, onChangeText, description } = props;

  const titleCheckBox = useMemo(() => {
    if (!label) return null;
    return (
      <Text
        title={label}
        color="easternBlue"
        fontSize="3xl"
        fontWeight="bold"
      />
    );
  }, [label]);

  const descriptionCheckBox = useMemo(() => {
    if (!description) return null;
    return (
      <Text title={description} color="gray66Gray78" fontSize="md" pt="-sm" />
    );
  }, [description]);

  return (
    <Box mb="md">
      {titleCheckBox}
      {descriptionCheckBox}
      <Box mb="sm" />
      {listValues.map((item) => (
        <CheckBox
          {...props}
          title={item.title}
          checked={item.value === value}
          onPress={() => onChangeText(item.value)}
          mb="sm"
          key={`${label}-${item.title}`}
        />
      ))}
    </Box>
  );
};
