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
};

export const CarouselGallerySmall = <T extends object>({
  data,
  scrollToActiveIndex,
  activeIndex,
  thumbRef,
  imageSize,
  spacing,
}: TCarouselGallerySmall<T>) => {
  const { colors } = useTheme();

  return (
    <FlatList
      ref={thumbRef}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ position: "absolute", bottom: imageSize }}
      contentContainerStyle={{ paddingHorizontal: spacing }}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={() => scrollToActiveIndex(index)}>
            <Image
              source={{ uri: item.src.portrait }}
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
