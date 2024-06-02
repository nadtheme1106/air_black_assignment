import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BeautyClubLogoBlack = ({
  beautyClubLogoBlackBeauty,
  beautyClubLogoBlackWidth,
  beautyClubLogoBlackHeight,
}) => {
  const beautyClubLogoBlackStyle = useMemo(() => {
    // Calculate default width as 50% of the screen width
    const defaultWidth = wp('50%');
    // Calculate default height maintaining the aspect ratio
    const defaultHeight = (defaultWidth * 68) / 163;

    const width = beautyClubLogoBlackWidth !== undefined
      ? beautyClubLogoBlackWidth
      : defaultWidth;
    const height = beautyClubLogoBlackHeight !== undefined
      ? beautyClubLogoBlackHeight
      : defaultHeight;

    return {
      ...getStyleValue("width", width),
      ...getStyleValue("height", height),
    };
  }, [beautyClubLogoBlackWidth, beautyClubLogoBlackHeight]);

  return (
    <Image
      style={[styles.beautyClubLogoblack, beautyClubLogoBlackStyle]}
      contentFit="cover"
      source={beautyClubLogoBlackBeauty}
    />
  );
};

const styles = StyleSheet.create({
  beautyClubLogoblack: {
    maxWidth: "100%",
    height: "auto",
    resizeMode: "contain",
  },
});

export default BeautyClubLogoBlack;
