import React from "react";
import PDFReader from "rn-pdf-reader-js";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components/native";
import { Skeleton } from "../Skeleton";
const { height } = Dimensions.get("window");

export type PdfPropd = {
  source?: {
    uri?: string;
    base64?: string;
    headers?: {
      [key: string]: string;
    };
  };
  loading?: boolean;
};

export const Pdf: React.FunctionComponent<PdfPropd> = (props) => {
  const { source, loading } = props;
  const { colors } = useTheme();

  if (!source) {
    console.warn("source is required");
    return null;
  }

  if (loading) {
    return <Skeleton mt="xl" height={height * 0.6} />;
  }

  return (
    <PDFReader
      source={{ ...source }}
      style={{
        width: "100%",
        height,
      }}
      customStyle={{
        readerContainer: { backgroundColor: colors.whiteBlack },
        readerContainerDocument: {
          backgroundColor: "transparent",
          height,
        },
        readerContainerNumbers: {
          backgroundColor: colors.transparent,
        },
        readerContainerZoomContainer: {
          backgroundColor: colors.transparent,
        },
        readerContainerZoomContainerButton: {
          color: colors.blackWhite,
        },
        readerContainerNumbersContent: {
          color: colors.blackWhite,
          backgroundColor: colors.veryLightGraySuvaGrey,
        },
      }}
      webviewStyle={{ backgroundColor: colors.whiteBlack }}
    />
  );
};
