import { View } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastShowParams,
} from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";
import { Button } from "../Button";
import { Box } from "../Box";
import { Text } from "../Text";
const { height } = Dimensions.get("window");

type TBodyError =
  | {
      message?: string;
      errorCode?: string;
      fields?: string[];
      code?: string;
    }
  | undefined;

type TOriginalMessage = {
  errorCode?: string;
  body?: TBodyError[];
  statusCode: number;
  path?: string;
  message?: string[];
  originalError?: TBodyError;
};

type TMsgError = {
  type: string;
  locale: string;
  message?: string;
  originalMessage?: TOriginalMessage;
  detail: string;
  msgError?:
    | {
        type: string;
        locale: string;
        message: string;
        originalMessage?: {
          path: string;
          message: string;
        };
      }
    | string;
};

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
      const error: TMsgError = props.props?.error?.response?.data;
      let originalMessage: TBodyError = undefined;
      if (error?.originalMessage?.body) {
        originalMessage = error.originalMessage.body?.at(0);
      }

      let text1Api = undefined;
      let text2Api = undefined;
      if (typeof error?.msgError !== "string") {
        text1Api =
          originalMessage?.message ||
          error?.message ||
          error?.msgError?.message;

        text2Api =
          originalMessage?.fields?.at(0) ||
          error?.msgError?.originalMessage?.message[0] ||
          error?.msgError?.originalMessage?.path ||
          error?.originalMessage?.originalError?.message ||
          props.props?.error?.message;
      }

      if (typeof error?.msgError === "string") {
        text2Api = error?.msgError;
      }

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

    errorToast: (props: ToastShowParams) => {
      const error: TMsgError = props.props?.error?.response?.data;
      let originalMessage: TBodyError = undefined;
      if (error?.originalMessage?.body) {
        originalMessage = error.originalMessage.body?.at(0);
      }

      let text1Api = undefined;
      let text2Api = undefined;
      if (typeof error?.msgError !== "string") {
        text1Api =
          originalMessage?.message ||
          error?.message ||
          error?.msgError?.message;

        text2Api =
          originalMessage?.fields?.at(0) ||
          error?.msgError?.originalMessage?.message[0] ||
          error?.msgError?.originalMessage?.path ||
          error?.originalMessage?.originalError?.message ||
          props.props?.error?.message;
      }

      if (typeof error?.msgError === "string") {
        text2Api = error?.msgError;
      }

      return (
        <Box
          flex={1}
          h={height}
          px="xl"
          w="100%"
          bg="opacity03"
          justifyContent="center"
        >
          <View
            style={{
              height: "auto",
              minHeight: 60,
              width: "100%",
              backgroundColor: colors.error,
              borderRadius: 10,
              paddingLeft: 8,
            }}
          >
            <Box borderRadius={10} bg="white" w="100%" p="xl">
              <Text
                fontSize="5xl"
                color="black"
                fontWeight="bold"
                iconName="alert-circle-outline"
                iconColor="error"
                iconSize={22}
                flex={1}
              >
                {text1Api || props.text1 || "Erro"}
              </Text>
              <Text fontSize="2xl" color="suvaGrey" pt="sm" pl="2lg">
                {text2Api ||
                  props.text2 ||
                  "Desculpe pelo nosso erro, tente novamente mais tarde"}
              </Text>

              <Box
                flexDir="row"
                justifyContent="space-between"
                alignSelf="flex-end"
                py="sm"
              >
                <Button
                  title="Fechar"
                  size="md"
                  type="clear"
                  fullWidth={false}
                  onPress={() => Toast.hide()}
                />
              </Box>
            </Box>
          </View>
        </Box>
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

  return (
    <Toast
      config={toastConfig}
      visibilityTime={5000}
      position={"top"}
      onShow={() => false}
    />
  );
};
