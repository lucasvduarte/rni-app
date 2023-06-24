import { ImageProps } from "./type";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useEffect, useState } from "react";
import { ImageBackgroundStyled, ImageStyled } from "./style";
import { Skeleton } from "../Skeleton";
import {
  Image as ImageRC,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import { BottomSheet } from "../BottomSheet";
import { Button } from "../Button";
import { Box } from "../Box";
import { Icon } from "../Icon";

const { height, width } = Dimensions.get("screen");

export const Image = (props: ImageProps) => {
  const {
    type = "image",
    isVideo = false,
    uri,
    children,
    onPressSecondy,
    w = width / 4,
    h = width / 4 - 12,
  } = props;
  const [imageValue, setImageValue] = useState("");
  const [visibleBottomSheet, setVisibleBottomSheet] = useState(false);

  useEffect(() => {
    if (isVideo && uri) {
      generateThumbnail(uri);
    }
  }, []);

  const generateThumbnail = async (uriVideo: string) => {
    try {
      const response = await VideoThumbnails.getThumbnailAsync(uriVideo, {
        time: 1000,
        quality: 1,
      });

      setImageValue(response.uri);
    } catch (e) {
      console.warn(e);
    }
  };

  if (type === "thumbnail") {
    if (isVideo && !imageValue) {
      return (
        <Skeleton
          width={Number(w?.toString().replace(/\D/g, ""))}
          height={Number(h?.toString().replace(/\D/g, ""))}
          borderRadius={props.borderRadius}
          mr={props.mr}
        />
      );
    }
    return (
      <>
        <Pressable onPress={() => setVisibleBottomSheet(true)}>
          <ImageBackgroundStyled
            w={w}
            h={h}
            {...props}
            source={{
              uri: isVideo ? imageValue : uri,
            }}
          >
            {children}
            {onPressSecondy && !children && (
              <Icon
                name="minus-circle"
                type="material-community"
                size={30}
                iconColor="red"
                onPress={onPressSecondy}
                ml={width / 4 - 30}
                borderRadius={6}
                zIndex={999}
              />
            )}
          </ImageBackgroundStyled>
        </Pressable>
        <BottomSheet
          visible={visibleBottomSheet}
          onBackdropPress={() => setVisibleBottomSheet(false)}
        >
          <Box flex={1} h={height} justifyContent="center" bg="white">
            <Box flex={1} flexDir="row" bg="transparent">
              <ImageBackgroundStyled
                source={{
                  uri: isVideo ? imageValue : uri,
                }}
                w={w}
                h={h}
              >
                {children}
              </ImageBackgroundStyled>
              <ImageRC
                source={{ uri: isVideo ? imageValue : uri }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </Box>
            <Button
              title="Fechar"
              onPress={() => setVisibleBottomSheet(false)}
              type="outline"
              bg="moderateGreen"
              pb="4xl"
              pt="xl"
              px="xl"
            />
          </Box>
        </BottomSheet>
      </>
    );
  }

  if (type === "background") {
    return <ImageBackgroundStyled {...props}>{children}</ImageBackgroundStyled>;
  }

  return <ImageStyled {...props} />;
};
