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
      <Box flexDir="row" alignItems="center">
        <Text
          title={title}
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          pr="md"
          flex={1}
        />

        <Icon
          name="alert-circle-outline"
          type="material-community"
          size={28}
          iconColor="white"
        />
      </Box>
    </Card>
  );
};
