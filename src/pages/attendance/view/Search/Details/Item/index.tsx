import { Box, Select, TextInput } from "../../../../../../components";
import { TQuestions } from "../../../../service/Search/type";
import { useState } from "react";
import { Segment, YesNo } from "../helps";

type TSearchItem = {
  item: TQuestions;
  handleChange: (value: string) => void;
};

export const SearchItem = ({ item, handleChange }: TSearchItem) => {
  const [value, setValue] = useState("");

  const handleChangeItem = (value: string) => {
    handleChange(value);
    setValue(value);
  };

  return (
    <Box>
      {item.tiporesposta === "Texto" ? (
        <TextInput
          label={item.pergunta}
          placeholder="Responder"
          size="large"
          keyboardType="default"
          value={value}
          onChangeText={(value) => handleChangeItem(value)}
          maxLength={180}
        />
      ) : (
        <Select
          title={item.pergunta}
          value={value}
          label={item.pergunta}
          onChangeText={(value) => handleChangeItem(value || "")}
          listValues={item.tiporesposta === "SimNao" ? YesNo : Segment}
          size="large"
        />
      )}
    </Box>
  );
};
