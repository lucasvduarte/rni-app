import { Box } from "../Box";
import { Text } from "../Text";
import { TextDescriptionProps } from "./type";

export const TextDescription = (props: TextDescriptionProps) => {
  const {
    title,
    description,
    fontSize = "3xl",
    fontSizeDescription = "xl",
    color = "blackSuvaGrey",
    colorDescription = "prussianBlueWhite",
    iconColor,
    iconName,
    iconSize,
    iconType,
    iconColorDescription,
    iconNameDescription,
    iconSizeDescription,
    iconTypeDescription,
    fontWeight = "500",
  } = props;
  return (
    <Box {...props}>
      <Text
        title={title}
        fontSize={fontSize}
        color={color}
        fontWeight="bold"
        iconType={iconType}
        iconName={iconName}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      {!!description && (
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
      )}
    </Box>
  );
};
