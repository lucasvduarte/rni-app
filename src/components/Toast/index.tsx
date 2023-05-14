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
          borderRadius: 10,
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
        text1={props.text1 || "Sucesso"}
        text2={props.text2 || "Sua solicitação foi efetuada com sucesso"}
      />
    ),

    error: (props: ToastShowParams) => {
      const text1Api = props.props?.error?.response?.data?.message;
      const text2Api =
        props.props?.error?.response?.data?.originalMessage?.message ||
        props.props?.error?.response?.data?.msgError?.message;

      return (
        <ErrorToast
          {...props}
          style={{
            borderLeftColor: colors.error,
            backgroundColor: colors.white,
            height: "auto",
            minHeight: 60,
            paddingVertical: 8,
            width: "90%",
            borderRadius: 10,
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
          text1={text1Api || props.text1 || "Erro"}
          text2={
            text2Api ||
            props.text2 ||
            "Desculpe pelo nosso erro, tente novamente mais tarde"
          }
        />
      );
    },

    info: (props: ToastShowParams) => {
      return (
        <ErrorToast
          {...props}
          style={{
            borderLeftColor: colors.easternBlue,
            backgroundColor: colors.white,
            height: "auto",
            minHeight: 60,
            paddingVertical: 8,
            width: "90%",
            borderRadius: 10,
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
          text1={props.text1 || "Aviso"}
          text2={props.text2 || "Sua solicitação foi efetuada com sucesso"}
        />
      );
    },

    tomatoToast: ({ text1, text2 }: ToastShowParams) => (
      <View
        style={{
          height: "auto",
          minHeight: 60,
          paddingVertical: 8,
          paddingHorizontal: 25,
          width: "90%",
          backgroundColor: "tomato",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "400" }}>{text1}</Text>
        <Text style={{ fontSize: 14, fontWeight: "300", color: "#979797" }}>
          {text2}
        </Text>
      </View>
    ),
  };
  return <Toast config={toastConfig} visibilityTime={5000} />;
};
