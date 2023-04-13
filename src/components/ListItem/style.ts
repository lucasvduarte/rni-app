import styled from "styled-components/native";
import { ListItemProps } from "./type";
import { ListItem } from "@rneui/base";
import {
  createSpacing,
  createBorderRadius,
  createBorderWidth,
  createShadow,
} from "../Ui";

export const ListItemStyled = styled(ListItem).attrs<ListItemProps>(
  (props) => ({
    containerStyle: {
      backgroundColor: "transparent",
      ...createBorderRadius(props, true),
      ...createSpacing(props, true),
      ...createBorderWidth(props, true),
      ...createShadow(props),
    },
  })
)<ListItemProps>``;
