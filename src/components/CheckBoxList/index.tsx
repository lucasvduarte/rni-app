import { CheckBox } from "../CheckBox";
import { CheckBoxListProps } from "./type";
import { Text } from "../Text";
import { useMemo } from "react";

export const CheckBoxList = (props: CheckBoxListProps) => {
  const { title, listValues, value } = props;

  const titleCheckBox = useMemo(() => {
    if (!title) return null;
    return (
      <Text
        title={title}
        pb="sm"
        color="easternBlue"
        fontSize="3xl"
        fontWeight="bold"
      />
    );
  }, [title]);

  return (
    <>
      {titleCheckBox}
      {listValues.map((item) => (
        <CheckBox {...props} checked={item.value === value} />
      ))}
    </>
  );
};
