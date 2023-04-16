import { StyleSheet, Animated, Dimensions } from "react-native";
import React from "react";
import { Box } from "../../Box";
import { Text } from "../../Text";
import { useTheme } from "styled-components/native";
const { width } = Dimensions.get("screen");

type TPagination<T> = {
  data: T[];
  scrollX: any;
  onPressBackNext: (valeu: boolean) => void;
  currentIndex: number;
};

const Pagination = <T extends object>({
  data,
  scrollX,
  onPressBackNext,
  currentIndex,
}: TPagination<T>) => {
  const { colors } = useTheme();
  return (
    <Box
      flexDir="row"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      m="xl"
      px="xs"
      py="xl"
    >
      <Text
        title="Voltar"
        onPress={() => onPressBackNext(true)}
        fontSize="4xl"
        color={currentIndex === 0 ? "veryLightGraySuvaGrey" : "blackWhite"}
        disabled={currentIndex === 0}
      />
      <Box flexDir="row" alignItems="center" justifyContent="center">
        {data.map((_e: any, idx: number) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: "clamp",
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [colors.gray78, colors.blackWhite, colors.gray78],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={idx.toString()}
              style={[styles.dot, { width: dotWidth, backgroundColor }]}
            />
          );
        })}
      </Box>

      <Text
        title="Proximo"
        onPress={() => onPressBackNext(false)}
        fontSize="4xl"
        color={
          data.length - 1 === currentIndex
            ? "veryLightGraySuvaGrey"
            : "blackWhite"
        }
        disabled={data.length - 1 === currentIndex}
      />
    </Box>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
});
