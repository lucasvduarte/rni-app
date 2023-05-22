import { Box } from "../Box";
import { Card } from "../Card";
import { CardProps } from "../Card/type";
import { Icon } from "../Icon";
import { Text } from "../Text";

interface InfoAlert extends CardProps {
  title: string;
}

export const InfoAlert = (props: InfoAlert) => {
  const { title } = props;
  return (
    <Card borderRadius="xl" bg="success" {...props}>
      <Box flexDir="row">
        <Text
          title={title}
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          pr="xs"
          flex={1}
        />
        <Box pl="xs">
          <Icon
            name="alert-circle-outline"
            type="material-community"
            size={28}
            iconColor="white"
          />
        </Box>
      </Box>
    </Card>
  );
};
