import { TextStyled } from "./style";
import { TextProps } from "./type";
import * as Animatable from "react-native-animatable";
import { useTheme } from "styled-components/native";
import { Icon } from "../Icon";
import { Box } from "../Box";

export const Text = (props: TextProps) => {
  const {
    children,
    title,
    animation,
    color = "black",
    iconName,
    iconType = "material-community",
    iconSize = 18,
  } = props;
  const { colors } = useTheme();

  if (!children && !title && title !== 0) {
    console.warn("title or children is required");
    return null;
  }

  if (animation) {
    return (
      <Animatable.View
        {...props}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        {iconName && (
          <Icon
            type={iconType}
            name={iconName}
            size={iconSize}
            iconColor={color}
            pr="sm"
          />
        )}
        <TextStyled {...props} color={colors[color] as never}>
          {title || children}
        </TextStyled>
      </Animatable.View>
    );
  }
  if (iconName) {
    return (
      <Box flexDir="row" alignItems="center">
        {iconName && (
          <Icon
            type={iconType}
            name={iconName}
            size={iconSize}
            iconColor={color}
            pr="sm"
          />
        )}
        <TextStyled {...props} color={colors[color] as never}>
          {title || children}
        </TextStyled>
      </Box>
    );
  }

  return (
    <TextStyled {...props} color={colors[color] as never}>
      {title || children}
    </TextStyled>
  );
};