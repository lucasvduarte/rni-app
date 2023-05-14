import { ImageProps } from "./type";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useEffect, useState } from "react";
import { ImageBackgroundStyled, ImageStyled } from "./style";

export const Image = (props: ImageProps) => {
  const {
    type = "image",
    isVideo = false,
    uri,
    height = 100,
    width = 100,
    children,
  } = props;
  const [imageValue, setImageValue] = useState("");

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

  if (type === "image" && !!children) {
    console.warn("children not accept");
    return null;
  }

  if (type === "thumbnail") {
    return (
      <ImageBackgroundStyled
        {...props}
        source={{
          uri: isVideo ? imageValue : uri,
        }}
      >
        {children}
      </ImageBackgroundStyled>
    );
  }

  if (type === "background") {
    return (
      <ImageBackgroundStyled {...props}> {children}</ImageBackgroundStyled>
    );
  }

  return <ImageStyled {...props} />;
};
