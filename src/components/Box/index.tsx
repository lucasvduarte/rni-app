import { ViewStyled } from "./style";
import { BoxProps } from "./type";
import * as Animatable from "react-native-animatable";

export const Box = (props: BoxProps) => {
  const { children, animation } = props;
  if (animation) {
    return (
      <Animatable.View {...props}>
        <ViewStyled {...props}>{children}</ViewStyled>
      </Animatable.View>
    );
  }
  return <ViewStyled {...props}>{children}</ViewStyled>;
};
