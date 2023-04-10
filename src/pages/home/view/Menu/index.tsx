import {
  BottomSheet,
  Box,
  Card,
  CheckBox,
  FlatList,
  Text,
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
    }, 250);
  };

  return (
    <Box flex={1}>
      <Text title="Alterar" onPress={() => setVisible(true)} p="xl" />
      <BottomSheet
        visible={visible}
        onBackdropPress={() => {
          if (!isSingIn) {
            setVisible(false);
          }
        }}
      >
        <Card m="2xl" mb="2xl" borderRadius="lg" shadow="md">
          {user?.item
            .filter((item) => item.CTRCLATIP === 1)
            .map((item) => {
              return (
                <Box pb="lg" key={item.EMPCOD}>
                  <CheckBox
                    checked={item.EMPCOD === enterpriseSelect?.EMPCOD}
                    color="easternBlue"
                    onPress={() => onPressSelect(item)}
                    title={item.EMPDESCOM}
                    iconType="material-community"
                    checkedIcon="circle"
                    uncheckedIcon="circle-outline"
                  />
                </Box>
              );
            })}
        </Card>
      </BottomSheet>

      <SectionList
        sections={listCard}
        keyExtractor={(item) => item.name}
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
              color="prussianBlue"
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
                return (
                  <Box w={width / 3 - 22} mb="xl" mx="md" key={item.name}>
                    <Card key={item.name} borderRadius="xl" p="lg">
                      <Box h={80} w="100%">
                        <Text
                          title={item.name}
                          onPress={() => {
                            navigation.navigate(item.router as never);
                          }}
                          textAlign="center"
                          flex={1}
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
