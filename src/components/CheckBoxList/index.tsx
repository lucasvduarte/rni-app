import { CheckBox } from "../CheckBox";
import { CheckBoxListProps } from "./type";
import { Text } from "../Text";
import { useMemo } from "react";
import { Box } from "../Box";

export const CheckBoxList = (props: CheckBoxListProps) => {
  const { label, listValues, value } = props;

  const titleCheckBox = useMemo(() => {
    if (!label) return null;
    return (
      <Text
        title={label}
        pb="sm"
        color="easternBlue"
        fontSize="3xl"
        fontWeight="bold"
      />
    );
  }, [label]);

  return (
    <Box mb="md">
      {titleCheckBox}
      {listValues.map((item) => (
        <CheckBox
          {...props}
          title={item.title}
          checked={item.value === value}
        />
      ))}
    </Box>
  );
};
