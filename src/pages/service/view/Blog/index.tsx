import { WebViewPage } from "../../../../components";

const uri = "https://rni.com.br/blog";

export const Blog = () => {
  return (
    <WebViewPage
      source={{
        uri,
      }}
    />
  );
};
