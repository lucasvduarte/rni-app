import React from "react";
import { useRef, useState } from "react";
import { FlatList, Image, Dimensions, StyleSheet } from "react-native";
import { CarouselGallerySmall } from "./small";
import { useDebounce } from "../../hooks";
import { Box } from "../Box";

const { width, height } = Dimensions.get("screen");

const IMAGE_SIZE = 80;
const SPACING = 10;
type TCarouselGallery<T> = {
  data?: T[];
  keyExtractor?: ((item: any, index: number) => string) | undefined;
  renderImage: (value: T) => string;
};

export const CarouselGallery = <T extends object>({
  data = [],
  keyExtractor,
  renderImage,
}: TCarouselGallery<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);

  const scrollToActiveIndex = (index: number) => {
    topRef?.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const scrollThumbRef = (index: number) => {
    setActiveIndex(index);
    thumbRef?.current?.scrollToIndex({
      index: index,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const debounce = useDebounce(scrollThumbRef, 200);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 40,
  }).current;

  return (
    <Box>
      <FlatList
        ref={topRef}
        data={data}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const x = event.nativeEvent?.contentOffset.x || 0;
          if (x && x !== activeIndex) {
            const indexAux = Number((x / width).toFixed(0));
            debounce(indexAux);
          }
        }}
        scrollEventThrottle={16}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => {
          return (
            <Box w={width} h={height}>
              <Image
                source={{ uri: renderImage(item) }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </Box>
          );
        }}
      />

      <CarouselGallerySmall
        thumbRef={thumbRef}
        data={data}
        activeIndex={activeIndex}
        scrollToActiveIndex={scrollToActiveIndex}
        imageSize={IMAGE_SIZE}
        spacing={SPACING}
        keyExtractor={keyExtractor}
        renderImage={renderImage}
      />
    </Box>
  );
};
