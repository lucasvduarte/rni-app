import React, { useEffect, useState } from "react";
import { Box } from "../Box";
import { SkeletonStyled } from "./style";
import { SkeletonProps } from "./type";
import { Dimensions } from "react-native";
const { width: fullWidth } = Dimensions.get("screen");

export const Skeleton = (props: SkeletonProps) => {
  const {
    circle,
    width = fullWidth - 32,
    size = 1,
    mr,
    flexDir = "column",
    height = 32,
    listHeight,
    listWidth,
  } = props;
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    var values = [];
    for (var x = 0; x < size; x++) {
      values.push(x);
    }
    setList(values);
  }, [size]);

  if (circle) {
    return (
      <Box flexDir={flexDir}>
        {list.map((item) => {
          return (
            <SkeletonStyled
              animation="pulse"
              width={width}
              height={width}
              circle
              {...props}
              key={item}
              mr={item === list.length - 1 ? "none" : mr}
            />
          );
        })}
      </Box>
    );
  }

  return (
    <Box flexDir={flexDir}>
      {list.map((item) => {
        return (
          <SkeletonStyled
            animation="pulse"
            width={listWidth?.length ? listWidth[item] : width}
            height={listHeight?.length ? listHeight[item] : height}
            key={item}
            mr={item === list.length - 1 ? "none" : mr}
            {...props}
          />
        );
      })}
    </Box>
  );
};
