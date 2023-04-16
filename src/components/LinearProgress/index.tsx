import { useTheme } from "styled-components/native";
import { LinearProgressStyled } from "./style";
import { LinearProgressProps } from "./type";
import { Box } from "../Box";
import { Text } from "../Text";

export const LinearProgress = (props: LinearProgressProps) => {
  const {
    color = "moderateGreen",
    title,
    p,
    px,
    py,
    pt,
    pb,
    pr,
    pl,
    value,
  } = props;
  const { colors } = useTheme();

  return (
    <Box p={p} px={px} py={py} pt={pt} pb={pb} pr={pr} pl={pl}>
      {title && <Text title={title} fontSize="2xl" />}

      <Text
        title={`${value ? value * 100 : 0}%`}
        pb="xs"
        fontSize="xl"
        textAlign="right"
        pr="sm"
        mt="-md"
      />
      <LinearProgressStyled {...props} color={colors[color] as never} />
    </Box>
  );
};
