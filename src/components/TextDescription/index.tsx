import { Box } from "../Box";
import { Text } from "../Text";
import { TextDescriptionProps } from "./type";

export const TextDescription = (props: TextDescriptionProps) => {
  const {
    title,
    description,
    fontSize = "lg",
    fontSizeDescription = "xl",
    color = "gray66Gray78",
    colorDescription = "prussianBlueWhite",
    iconColor,
    iconName,
    iconSize,
    iconType,
    iconColorDescription,
    iconNameDescription,
    iconSizeDescription,
    iconTypeDescription,
    fontWeight = "600",
  } = props;
  return (
    <Box {...props}>
      <Text
        title={title}
        fontSize={fontSize}
        color={color}
        fontWeight="500"
        iconType={iconType}
        iconName={iconName}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text
        title={description}
        fontSize={fontSizeDescription}
        color={colorDescription}
        fontWeight={fontWeight}
        iconType={iconTypeDescription}
        iconName={iconNameDescription}
        iconSize={iconSizeDescription}
        iconColor={iconColorDescription}
      />
    </Box>
  );
};
