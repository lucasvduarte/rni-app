import { Text } from "../Text";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TimerCountdownProps } from "./type";
import { Box } from "../Box";

const SECONDS = 300;

export const TimerCountdown = (props: TimerCountdownProps) => {
  const {
    seconds = SECONDS,
    isFinal,
    reset,
    title = "",
    color,
    fontSize = "xl",
    onPress,
  } = props;
  const [time, setTime] = useState(SECONDS);
  const timerRef = useRef(time);
  const [resetTimer, setResetTimer] = useState(false);

  useLayoutEffect(() => {
    setTime(seconds || SECONDS);
    timerRef.current = seconds || SECONDS;
    setResetTimer((previus) => !previus);
  }, [reset, seconds]);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        isFinal(true);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [resetTimer]);

  return (
    <Box flexDir="row" alignContent="flex-end" {...props}>
      <Text
        title={`${title}`}
        fontSize={fontSize}
        color={color}
        onPress={onPress}
      />
      <Text
        title={` em ${("00" + Math.floor(time / 60)).slice(-2)}:${(
          "00" +
          ((time % 3600) % 60)
        ).slice(-2)}`}
        fontSize="xl"
      />
    </Box>
  );
};
