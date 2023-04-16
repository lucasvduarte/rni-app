import { FlashList } from "@shopify/flash-list";
import { FlashListProps } from "./type";

export const FlatList = <T extends object>(props: FlashListProps<T>) => {
  return <FlashList estimatedItemSize={200} {...props} />;
};
