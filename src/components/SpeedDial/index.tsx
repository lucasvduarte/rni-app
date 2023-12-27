import React, { useState } from "react";
import { SpeedDialProps } from "./type";
import { SpeedDialStyled } from "./style";
import { useTheme } from "styled-components/native";

export const SpeedDial: React.FunctionComponent<SpeedDialProps> = (props) => {
  const { data, icon } = props;
  const [open, setOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <SpeedDialStyled
      isOpen={open}
      icon={{ name: icon || "search", color: colors.white }}
      openIcon={{ name: "close", color: colors.white }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      buttonStyle={{ backgroundColor: colors.easternBlue }}
    >
      {data.map((item) => {
        if (!item.visible) {
          return <></>;
        }
        return (
          <SpeedDialStyled.Action
            icon={{ name: item.icon, color: colors.white }}
            title={item.title}
            onPress={() => {
              setOpen(false);
              item.onPress();
            }}
            color={colors.easternBlue}
            titleStyle={{ fontFamily: "Inter_400Regular" }}
            key={item.title}
          />
        );
      })}
    </SpeedDialStyled>
  );
};
