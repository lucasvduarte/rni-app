import { Animated, Dimensions, FlatList, ListRenderItem } from "react-native";
import React, { useRef, useState } from "react";
import Pagination from "./Pagination";
import { Box } from "../Box";
const { width } = Dimensions.get("window");

type TCarousel<T> = {
  data?: T[];
  renderItem: ListRenderItem<T> | null | undefined;
};

export const Carousel = <T extends object>({
  data = [],
  renderItem,
}: TCarousel<T>) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 10,
  }).current;
  const ref = useRef<any>();

  const handleOnScroll = (event: any) => {
    const x = event.nativeEvent?.contentOffset.x || 0;
    if (x && x !== currentIndex)
      setCurrentIndex(Number((x / (width - 50)).toFixed(0)));

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

  const onPressPagination = (isBack: boolean) => {
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentIndex) + (isBack ? -1 : 1),
    });
    setTimeout(() => {
      setCurrentIndex(currentIndex + (isBack ? -1 : 1));
    }, 1000);
  };

  return (
    <Box>
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
      />

      <Pagination
        data={data}
        scrollX={scrollX}
        /*     onPressBack={() => {
           ref.current.scrollToIndex({
              animated: true,
              index: parseInt(currentIndex) - 1,
            });
            setTimeout(() => {
              setCurrentIndex(currentIndex - 1);
            }, 1000);
     
            onPressPagination(true)
          }}
          onPressNext={() => {
           ref.current.scrollToIndex({
              animated: true,
              index: parseInt(currentIndex) + 1,
            });
            setTimeout(() => {
              setCurrentIndex(currentIndex + 1);
            }, 1000);
           onPressPagination(false);
        }}
         */
        onPressBackNext={(value) => onPressPagination(value)}
        currentIndex={currentIndex}
      />
    </Box>
  );
};
