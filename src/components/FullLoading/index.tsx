import { Box } from "../Box";
import { Dimensions, ActivityIndicator } from "react-native";

const { height } = Dimensions.get("window");

export const FullLoading = () => {
  return (
    <Box
      flex={1}
      bg="opacity03"
      position="absolute"
      w="100%"
      h={height}
      mt={34}
      justifyContent="center"
    >
      <ActivityIndicator size="large" color="#008d97" />
    </Box>
  );
};
