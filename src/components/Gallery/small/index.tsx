import React from "react";
import { FlatList, Image, Pressable } from "react-native";

const IMAGE_SIZE = 80;
const SPACIN = 10;

export const CarouselGallerySmall = ({
  data,
  scrollX,
  scrollToActiveIndex,
  activeIndex,
  thumbRef,
}: any) => {
  console.log(scrollX);

  return (
    <FlatList
      ref={thumbRef}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ position: "absolute", bottom: IMAGE_SIZE }}
      contentContainerStyle={{ paddingHorizontal: SPACIN }}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={() => scrollToActiveIndex(index)}>
            <Image
              source={{ uri: item.src.portrait }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 12,
                marginRight: SPACIN,
                borderWidth: 2,
                borderColor: activeIndex === index ? "#fff" : "transparent",
              }}
            />
          </Pressable>
        );
      }}
    />
  );
};
