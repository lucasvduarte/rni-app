import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  ViewToken,
} from "react-native";
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
const SPACIN = 10;

export const CarouselGallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const handleOnViewableItemsChanged = useRef<
    | ((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void)
    | null
    | undefined
  >(({ viewableItems }) => {
    const viewableIndex = viewableItems[0]?.index ?? 0;
    setIndex(viewableIndex);
  }).current;

  useEffect(() => {
    const fetchImages = async () => {
      const imagens = await fetchImagesFromPexels();
      setImages(imagens);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length) {
      scrollToActiveIndex(index);
    }
  }, [index, images.length]);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACIN) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACIN) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 70,
  }).current;

  if (!images) {
    return <Text>loading</Text>;
  }

  return (
    <View>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />

      <FlatList
        ref={thumbRef}
        data={images}
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
    </View>
  );
};
