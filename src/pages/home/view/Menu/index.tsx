import {
  BottomSheet,
  Box,
  Card,
  FlatList,
  Icon,
  Text,
  ListItem,
  ListItemSubtitle,
  ListItemTitle,
  ListItemContent,
  CheckBox,
} from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { setEnterpriseSelect } from "../../../../redux/modules/auth/action";
import { useLayoutEffect, useState } from "react";
import { TItem } from "../../../../redux/modules/auth/type";
import { listCard } from "./helps";
import { MenuProps } from "../../../../navigation/private/types";
import { Dimensions, SectionList } from "react-native";

const { width } = Dimensions.get("window");

export const Menu = ({ navigation }: MenuProps) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const { isSingIn, user, enterpriseSelect } = useAppSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useLayoutEffect(() => {
    if (isSingIn) {
      setVisible(true);
    }
  }, [isSingIn]);

  const onPressSelect = (item: TItem) => {
    dispatch(setEnterpriseSelect(item));
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <Box flex={1}>
      <BottomSheet
        visible={visible}
        onBackdropPress={() => {
          if (!isSingIn) {
            setVisible(false);
          }
        }}
      >
        <Card mx="xl" mb="2xl" borderRadius="lg" shadow="md">
          <Text
            title="Alterar empreendimento"
            pb="md"
            color="easternBlue"
            fontSize="xl"
            fontWeight="bold"
          />

          {user?.item
            .filter((item) => item.CTRCLATIP === 1)
            .map((item, index) => {
              return (
                <ListItem
                  topDivider={!!index}
                  onPress={() => onPressSelect(item)}
                  px="md"
                  py="lg"
                  key={item.EMPCOD}
                >
                  <CheckBox
                    checked={item.EMPCOD === enterpriseSelect?.EMPCOD}
                    color="easternBlue"
                    iconType="material-community"
                    checkedIcon="circle"
                    uncheckedIcon="circle-outline"
                    disabled
                  />
                  <ListItemContent>
                    <ListItemTitle>
                      <Text
                        title={item.EMPDESCOM}
                        color="matterhorn"
                        fontSize="md"
                      />
                    </ListItemTitle>
                    <ListItemSubtitle>
                      <Text
                        title={`Unidade: ${item.UNICOD}    Torre: ${item.TORCOD}`}
                        color="suvaGrey"
                        fontSize="md"
                      />
                    </ListItemSubtitle>
                  </ListItemContent>
                </ListItem>
              );
            })}
        </Card>
      </BottomSheet>

      <SectionList
        sections={listCard}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={
          <Text
            title="Alterar empreendimento"
            onPress={() => setVisible(true)}
            p="xl"
            color="prussianBlueWhite"
            textAlign="right"
          />
        }
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => (
          <Box h={144 * section.numColuns + (section.numColuns < 2 ? 16 : 0)}>
            <Text
              title={section.title}
              key={section.title}
              pb="xl"
              pl="xl"
              fontWeight="bold"
              color="prussianBlueWhite"
              fontSize="2xl"
            />
            <FlatList
              data={section.data}
              keyExtractor={(item) => item.name}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              numColumns={3}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 8,
              }}
              renderItem={({ item }) => {
                if (item.disabled) {
                  return null;
                }
                return (
                  <Box w={width / 3 - 22} mb="xl" mx="md" key={item.name}>
                    <Card
                      key={item.name}
                      borderRadius="xl"
                      p="lg"
                      onPress={() => {
                        navigation.navigate(item.router as never);
                      }}
                      shadow="sm"
                    >
                      <Box h={80} w="100%">
                        <Text
                          title={item.name}
                          textAlign="center"
                          color="blackSuvaGrey"
                          flex={1}
                        />

                        <Icon
                          name={item.icon}
                          type="material-community"
                          size={28}
                          iconColor="prussianBlueWhite"
                          mb="md"
                        />
                      </Box>
                    </Card>
                  </Box>
                );
              }}
            />
          </Box>
        )}
      />
    </Box>
  );
};
