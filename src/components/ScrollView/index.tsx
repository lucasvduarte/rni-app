import React from "react";
import { ScrollViewStyled } from "./style";
import { TScrollView } from "./type";

export const ScrollView = (props: TScrollView) => {
  const { children } = props;
  return <ScrollViewStyled {...props}>{children}</ScrollViewStyled>;
};
