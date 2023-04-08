import styled from "styled-components/native";
import { CheckBox } from "@rneui/themed";
import { CheckBoxProps } from "./type";

export const CheckBoxStyled = styled(CheckBox).attrs<CheckBoxProps>(() => ({
  containerStyle: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "transparent",
  },
}))<CheckBoxProps>``;
