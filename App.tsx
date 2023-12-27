import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import AppPage from "./src";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_300Light,
  Inter_200ExtraLight,
  Inter_100Thin,
  Inter_900Black,
} from "@expo-google-fonts/inter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000,
    },
  },
});

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_300Light,
    Inter_200ExtraLight,
    Inter_100Thin,
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppPage />
      </QueryClientProvider>
    </Provider>
  );
}

// https://www.npmjs.com/package/react-native-responsive-fontsize
// https://www.npmjs.com/package/react-native-shared-element
//xxp2naoyqwh6yqtuksqdozfpqzfjljulcvtt4figudflilwcua6a
