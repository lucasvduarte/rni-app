import { FlashList, FlashListProps } from "@shopify/flash-list";

export const FlatList = <T extends object>(props: FlashListProps<T>) => {
  return <FlashList estimatedItemSize={200} {...props} />;
};
