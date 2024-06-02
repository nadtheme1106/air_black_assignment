import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  vector,
  whyShouldYouJoinAirblack,
  vector1,
  propMarginTop,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.vectorParent, frameViewStyle]}>
      <Image
        style={styles.vectorIconLayout}
        contentFit="cover"
        source={vector}
      />
      <Text style={styles.whyShouldYou}>{whyShouldYouJoinAirblack}</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={vector1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 6,
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
  whyShouldYou: {
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    color: Color.colorWhitesmoke,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.05)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    marginLeft: 25,
  },
  vectorIcon1: {
    marginLeft: 25,
  },
  vectorParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    marginTop: 32,
  },
});

export default FrameComponent;
