import React from "react";
import { useEffect, useRef, useState } from "react";
import { FlatList, Image, Dimensions, StyleSheet } from "react-native";
import { CarouselGallerySmall } from "./small";
import { useDebounce } from "../../hooks";
import { Box } from "../Box";
import { Text } from "../Text";

const { width, height } = Dimensions.get("screen");

const API_KEY = "hd1Ln3gAxRI9OU10fPJC063TolpmrWTM2rjsiu24IQi8JUxxI1Q5IYfd";
const API_URL =
  "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20";

const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: { Authorization: API_KEY },
  });

  const { photos } = await data.json();
  return photos;
};

const IMAGE_SIZE = 80;
const SPACING = 10;

export const CarouselGallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imagens = await fetchImagesFromPexels();
      setImages(imagens);
    };
    fetchImages();
  }, []);

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

  if (!images) {
    return <Text title="loading ...." />;
  }

  return (
    <Box>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
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
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </Box>
          );
        }}
      />

      <CarouselGallerySmall
        thumbRef={thumbRef}
        data={images}
        activeIndex={activeIndex}
        scrollToActiveIndex={scrollToActiveIndex}
        imageSize={IMAGE_SIZE}
        spacing={SPACING}
      />
    </Box>
  );
};
