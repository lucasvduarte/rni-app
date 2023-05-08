import { WebViewPage } from "../../../../components";

const uri = "https://blog.rni.com.br/";

export const Blog = () => {
  return (
    <WebViewPage
      source={{
        uri,
      }}
    />
  );
};
