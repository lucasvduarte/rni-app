import { Animated, FlatList, View } from "react-native";
import React, { useRef } from "react";
import SlideItem from "./Item";
import Pagination from "./Pagination";

export const Slides = [
  {
    id: 1,
    img: require("../../assets/login/login.png"),
    title: "Apple Watch Series 7",
    description: "The future of health is on your wrist",
    price: "$399",
  },
  {
    id: 2,
    img: require("../../assets/login/login.png"),
    title: "AirPods Pro",
    description: "Active noise cancellation for immersive sound",
    price: "$249",
  },
  {
    id: 3,
    img: require("../../assets/login/login.png"),
    title: "AirPods Max",
    description: "Effortless AirPods experience",
    price: "$549",
  },
  {
    id: 4,
    img: require("../../assets/login/login.png"),
    title: "Charger",
    description: "It's not magic, it's just science",
    price: "$49",
  },
  {
    id: 5,
    img: require("../../assets/login/login.png"),
    title: "Smart Lock",
    description: "Unlock your door with your phone",
    price: "$199",
  },
];

export const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} />
    </View>
  );
};
