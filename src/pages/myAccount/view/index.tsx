import { Box, Text } from "../../../components";
import { Switch } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setTheme } from "../../../redux/modules/auth/action";
import { RootState } from "../../../redux/store";

export const MyAccount = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const toggleSwitch = async (value: boolean) => {
    await dispatch(setTheme(value ? "dark" : "light"));
  };

  return (
    <Box m="xl">
      <Text title="Minha Conta" />
      <Switch value={auth.theme === "dark"} onValueChange={toggleSwitch} />
    </Box>
  );
};
