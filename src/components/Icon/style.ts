import styled from "styled-components/native";
import { IconProps } from "./type";
import { Icon } from "@rneui/themed";
import { createSpacing } from "../Ui";

export const IconStyled = styled(Icon).attrs<IconProps>((props) => ({
  iconStyle: {
    ...createSpacing(props, true),
  },
  color: props.colorStyle,
}))<IconProps>``;
