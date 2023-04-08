import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import AppPage from "./src";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppPage />
      </QueryClientProvider>
    </Provider>
  );
}
