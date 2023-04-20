import { useTheme } from "styled-components/native";
import { Box } from "../Box";
import { useRef, useState } from "react";
import { TextInput } from "react-native";

type TOtp = {
  codeCount: number;
  onChangeText: (value: string) => void;
};

export const Otp = ({ codeCount, onChangeText }: TOtp) => {
  const { colors } = useTheme();
  const inputCodeRef = useRef(new Array());
  const [codes, setCodes] = useState<string[]>(new Array(codeCount).fill(""));

  const onChangeCode = (code: string, index: number) => {
    const currentCodes = [...codes];
    currentCodes[index] = code.slice(-1);
    setCodes(currentCodes);
    onChangeText(currentCodes.join(""));
  };

  const onKeyPress = (event: any, index: number) => {
    const key = event.nativeEvent.key;
    let destIndex = index;
    if (key === "Backspace") {
      destIndex = index > 0 ? index - 1 : 0;
    } else {
      destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1;
    }
    inputCodeRef.current[destIndex].focus();
  };

  return (
    <Box flexDir="row" justifyContent="space-between">
      {codes.map((item, index) => {
        return (
          <TextInput
            key={`${index}`}
            ref={(element) => inputCodeRef.current.push(element)}
            style={{
              width: 40,
              height: 44,
              borderColor: colors.gray66Gray78,
              borderWidth: 1.2,
              textAlign: "center",
              borderRadius: 10,
              fontSize: 18,
            }}
            onChangeText={(text) => onChangeCode(text, index)}
            onKeyPress={(event) => onKeyPress(event, index)}
            value={item}
            keyboardType="number-pad"
            selectionColor={colors.transparent}
            autoFocus={index === 0}
          />
        );
      })}
    </Box>
  );
};
