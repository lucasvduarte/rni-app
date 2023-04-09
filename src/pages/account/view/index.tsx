import { Box, Button, Text } from "../../../components";
import { Switch } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { clearUser, setTheme } from "../../../redux/modules/auth/action";
import { RootState } from "../../../redux/store";

export const Account = () => {
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
      <Button
        title="Sair"
        onPress={() => {
          dispatch(clearUser());
        }}
        type="clear"
      />
    </Box>
  );
};
