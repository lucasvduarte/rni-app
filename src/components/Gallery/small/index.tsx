import React from "react";
import { FlatList, Image, Pressable } from "react-native";
import { useTheme } from "styled-components/native";

type TCarouselGallerySmall<T> = {
  data: T[];
  thumbRef: React.RefObject<FlatList<any>>;
  scrollToActiveIndex: (valeu: number) => void;
  activeIndex: number;
  imageSize: number;
  spacing: number;
  keyExtractor?: ((item: any, index: number) => string) | undefined;
  renderImage: (value: T) => string;
};

export const CarouselGallerySmall = <T extends object>({
  data,
  scrollToActiveIndex,
  activeIndex,
  thumbRef,
  imageSize,
  spacing,
  keyExtractor,
  renderImage,
}: TCarouselGallerySmall<T>) => {
  const { colors } = useTheme();

  return (
    <FlatList
      ref={thumbRef}
      data={data}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ position: "absolute", bottom: imageSize }}
      contentContainerStyle={{ paddingHorizontal: spacing }}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={() => scrollToActiveIndex(index)}>
            <Image
              source={{ uri: renderImage(item) }}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: 12,
                marginRight: spacing,
                borderWidth: 2,
                borderColor:
                  activeIndex === index ? colors.white : colors.transparent,
              }}
            />
          </Pressable>
        );
      }}
    />
  );
};
