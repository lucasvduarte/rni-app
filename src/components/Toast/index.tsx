import { View, Text } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastShowParams,
} from "react-native-toast-message";
import { useTheme } from "styled-components/native";

export const ToastStyled = () => {
  const { colors } = useTheme();

  const toastConfig = {
    success: (props: ToastShowParams) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.success,
          backgroundColor: colors.white,
          height: "auto",
          minHeight: 60,
          paddingVertical: 8,
          width: "90%",
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "400",
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: "300",
        }}
        text2NumberOfLines={4}
      />
    ),

    error: (props: ToastShowParams) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: colors.error,
          backgroundColor: colors.white,
          height: "auto",
          minHeight: 60,
          paddingVertical: 8,
          width: "90%",
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "400",
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: "300",
        }}
        text2NumberOfLines={4}
      />
    ),

    tomatoToast: ({ text1, props }: ToastShowParams) => (
      <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };
  return <Toast config={toastConfig} visibilityTime={5000} />;
};
