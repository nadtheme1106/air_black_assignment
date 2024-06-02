import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Image } from "expo-image";
import Image1 from "../components/Image1";
import HeroText from "../components/HeroText";
import ContainerForm from "../components/ContainerForm";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import { Padding, Color } from "../GlobalStyles";

const windowHeight = Dimensions.get("window").height;

const Mobile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.mobile}>
        <Image1 />
        <View style={[styles.section, styles.heroSection]}>
          <HeroText />
          <ContainerForm />
        </View>
        <Component />
        <View style={[styles.section, styles.bottomSection]}>
          <FrameComponent
            vector={require("../assets/vector3.png")}
            whyShouldYouJoinAirblack={`Get Certified From India’s Biggest Beauty Platform`}
            vector1={require("../assets/vector4.png")}
            propMarginTop="unset"
          />
          <Image
            style={styles.image676Icon}
            contentFit="cover"
            source={require("../assets/image-676.png")}
          />
        </View>
        <Footer style={styles.footer} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center", // Center content horizontally
    width: "100%", // Ensure scrollView takes full width
  },
  section: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20, // Added padding for better spacing on wider screens
  },
  heroSection: {
    backgroundColor: "#0f1014",
    paddingTop: 20,
    paddingBottom: Padding.p_11xl,
  },
  bottomSection: {
    backgroundColor: Color.registerairblackcoBlack,
    paddingVertical: Padding.p_11xl,
  },
  image676Icon: {
    width: "100%", // Ensure image takes full width
    aspectRatio: 361 / 252, // Maintain aspect ratio
    marginTop: 14,
  },
  mobile: {
    flex: 1,
    minHeight: windowHeight, // Ensure minHeight to fill screen height
    width: "100%", // Ensure mobile view takes full width
  },
  footer: {
    width: "100%", // Ensure footer takes full width
  },
});

export default Mobile;
