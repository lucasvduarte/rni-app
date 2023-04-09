import { BottomSheet, Box, Cards, Modal, Text } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { setIsSingIn } from "../../../../redux/modules/auth/action";

export const Menu = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <Box m="xl" flex={1}>
      <BottomSheet visible={auth.isSingIn} isOnBackdropPress={false}>
        <Cards m="2xl" mb="2xl" borderRadius="lg" shadow="md">
          {auth.user?.item
            .filter((item) => item.CTRCLATIP === 1)
            .map((item) => {
              return (
                <Text
                  title="HOME"
                  key={item.EMPCOD}
                  onPress={() => {
                    dispatch(setIsSingIn());
                  }}
                />
              );
            })}
        </Cards>
      </BottomSheet>

      <Modal type="custom" isVisible={false} title="HOME">
        <Box bg="atlantis">
          <Text title="HOME" color="black" />
        </Box>
      </Modal>
    </Box>
  );
};
