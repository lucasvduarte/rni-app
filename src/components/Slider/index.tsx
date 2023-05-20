import React from "react";
import { Slider } from "@rneui/themed";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { SlidersProps } from "./type";

export const Sliders = (props: SlidersProps) => {
  const {
    title,
    onValueChange,
    value,
    maximumValue = 10,
    minimumValue = 0,
  } = props;

  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <Box mb="xl" pt="sm" {...props}>
      <Text pb="xl" title={title} fontSize="3xl" />
      <Slider
        value={value}
        onValueChange={onValueChange}
        maximumValue={maximumValue}
        minimumValue={minimumValue}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <Icon
              name="heart"
              type="material-community"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={color()}
            />
          ),
        }}
      />
    </Box>
  );
};
