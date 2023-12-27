import { CheckBox } from "../CheckBox";
import { TextInputCheckBoxProps } from "./type";
import { useEffect, useState } from "react";
import { TextInput } from "../TextInput";

export const TextInputCheckBox = (props: TextInputCheckBoxProps) => {
  const { label, valueChecked, labelCheckBox, value } = props;
  const [checked, setChecked] = useState(false);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (value) {
      setValueInput(value);
    }
  }, []);

  return (
    <>
      <TextInput
        {...props}
        label={label}
        value={valueInput}
        onChangeText={(item) => {
          props.onChangeText(item);
          setValueInput(item);
          if (item !== value) {
            setChecked(false);
          }
        }}
      />

      <CheckBox
        checked={checked}
        title={labelCheckBox}
        onPress={() => {
          setChecked((previus) => !previus);
          props.onChangeText(!checked ? valueChecked || "" : "");
          setValueInput(!checked ? valueChecked || "" : "");
        }}
        mb="sm"
        mt="-xl"
      />
    </>
  );
};
