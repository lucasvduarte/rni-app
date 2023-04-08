import { useAppSelector, useAppDispatch } from "../../hooks";
import { putDecrement, putIncrement } from "./action";
import { RootState } from "../../store";
import { View } from "react-native";
import { Button, Text } from "../../../components";

export const Counter = () => {
  const count = useAppSelector((state: RootState) => {
    return state.counter.value;
  });
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text title={count} />
      <Button
        onPress={() => dispatch(putDecrement())}
        title="Decrement value"
      />
      <Button
        title="Increment value"
        onPress={() => dispatch(putIncrement())}
      />
    </View>
  );
};
