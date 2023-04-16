import { useNavigation } from "@react-navigation/native";
import { Box } from "../Box";
import type { CompositeNavigationProp } from "@react-navigation/native";
import { Text } from "../Text";
import { RniPng } from "../../assets";
import * as Animatable from "react-native-animatable";
import { Icon } from "../Icon";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

type ScreenNavigationProp = CompositeNavigationProp<any, any>;

export const HeaderTitle = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <Box flexDir="row">
      <Animatable.Image
        source={RniPng}
        animation="flipInY"
        resizeMode="contain"
        duration={1200}
      />
      <Box pt="sm" pl="xs">
        <Text title={`Olá, ${auth.user?.cliente.nome}`} color="blackWhite" />
        <Text
          title="Minha Conta >"
          onPress={() => navigate("AccountMenu")}
          color="suvaGrey"
        />
      </Box>
    </Box>
  );
};
export const HeaderRight = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  return (
    <Icon
      type="material"
      name="menu-open"
      size={30}
      iconColor="prussianBlueWhite"
      onPress={() => navigate("Menu")}
    />
  );
};

export const HeaderRightMenu = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  return (
    <Icon
      type="material"
      name="notifications-none"
      size={30}
      iconColor="prussianBlueWhite"
      onPress={() => navigate("Notification")}
    />
  );
};
