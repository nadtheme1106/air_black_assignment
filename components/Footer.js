import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent from "./FrameComponent";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Footer = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.image, styles.imagePosition]}>
        <View style={[styles.divframer145h7r4, styles.imagePosition]}>
          <View style={[styles.divframer1w3xset, styles.divframerLayout]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/zmxqwkfbejrqapbt6wdbyw9c77apng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframerBblki7, styles.divframerPosition1]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/fkdjytq0z10pkcimvgg2xf3q0jpg1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1ycl6m, styles.divframerLayout]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/olytuxqtpzi5x0j9jbbgcytfopng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1dnhb97, styles.divframerLayout]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/nus134xofhur4fscnynn0hazwuejpg1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframerEavpp8, styles.divframerPosition]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/nxkofntfy9ikxcpxptowzhq5cdupng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframerW2t539, styles.divframerPosition1]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/brdpcuqjd3f8gbyuk0xrimiepng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframerSpp2p8, styles.divframerPosition]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/nwplmeuuorxeizilywivinmrdsmpng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1l1064p, styles.divframerPosition]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/3roobvkysvltma83f4b1idfc2spng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1m45co2, styles.divframerLayout]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/6xvq22ho5urja40fbslgzxjwmapng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer11lc4h6, styles.divframerPosition1]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/igiz71nklzdzeqhhjjj6zzflbgpng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1fv8yp7, styles.divframerPosition]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/ulgo1lvjg0qqwvsnruetz3h9eimpng1.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1wr33m2, styles.divframerPosition1]}>
            <View style={[styles.div, styles.divframerPosition1]}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../assets/bijgdu7wrx4u7qhuhojdtr06lmpng1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <FrameComponent
        whyShouldYouJoinAirblack={`       Join our 
        growing community
      of 35,000+alumini`}
      />
       <LinearGradient
        style={[styles.divframerZlvey9, styles.divframerZlvey9FlexBox]}
        locations={[0, 1]}
        colors={["#f56563", "#e54988"]}
      >
        <View>
          <View style={styles.p1}>
            <Text style={styles.applyNow}>Apply Now</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.instagramParent, styles.divframerZlvey9FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/instagram.png")}
        />
        <Image
          style={[styles.iconLayout, styles.marginLeft17]}
          contentFit="cover"
          source={require("../assets/image-487.png")}
        />
        <Image
          style={[styles.iconLayout, styles.marginLeft17]}
          contentFit="cover"
          source={require("../assets/linkedin.png")}
        />
        <Image
          style={[styles.iconLayout, styles.marginLeft17]}
          contentFit="cover"
          source={require("../assets/image-488.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    height: hp('50%'), // Adjust this value as necessary
    left: "50%",
    position: "absolute",
  },
  applyNowButton: {
    borderRadius: Border.br_9xs,
    height: hp('5%'),
    paddingHorizontal: wp('5%'),
    paddingLeft: wp('5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    backgroundColor: Color.registerairblackcoLinearCarnationCranberry,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: hp('2%'),
  },
  image487Icon: {
    width: wp('8%'),
    height: hp('8%'),
  },
  linkedinIcon: {
    marginLeft: wp('5%'),
  },
  iconLayout: {
    height: hp('5%'),
    width: wp('5%'),
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  marginLeft17: {
    marginLeft: wp('5%'),
  },
  instagramParent: {
    zIndex: 3,
    flexDirection: "row",
    justifyContent: "center", // Center icons horizontally
    marginTop: hp('2%'), // Add some space above the icons
  },
  divframerLayout: {
    height: hp('16%'), // Adjust the height as necessary
    overflow: "hidden",
  },
  divframerPosition1: {
    bottom: 0,
    width: wp('30%'), // Adjust the width as necessary
    position: "absolute",
  },
  divframerPosition: {
    top: hp('16%'), // Adjust the top position as necessary
    height: hp('16%'), // Adjust the height as necessary
    width: wp('30%'), // Adjust the width as necessary
    position: "absolute",
    overflow: "hidden",
  },
  frameParentFlexBox: {
    marginTop: hp('5%'), // Adjust margin as necessary
    flexDirection: "row",
    alignSelf: "stretch",
  },
  applyNowTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    width: wp('25%'), // Adjust width as necessary
    alignItems: "center",
  },
  zmxqwkfbejrqapbt6wdbyw9c77apnIcon: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  div: {
    justifyContent: "center",
    left: 0,
    top: 0,
  },
  divframer1w3xset: {
    width: wp('30%'), // Adjust width as necessary
    height: hp('16%'), // Adjust height as necessary
    top: 0,
    position: "absolute",
    left: wp('60%'), // Adjust left position as necessary
  },
  divframerBblki7: {
    right: 0,
    height: hp('16%'), // Adjust height as necessary
    overflow: "hidden",
  },
  divframer1ycl6m: {
    left: wp('30%'), // Adjust left position as necessary
    width: wp('30%'), // Adjust width as necessary
    height: hp('16%'), // Adjust height as necessary
    top: 0,
    position: "absolute",
  },
  divframer1dnhb97: {
    left: wp('90%'), // Adjust left position as necessary
    width: wp('30%'), // Adjust width as necessary
    height: hp('16%'), // Adjust height as necessary
    top: 0,
    position: "absolute",
  },
  divframerEavpp8: {
    left: 0,
  },
  divframerW2t539: {
    left: wp('30%'), // Adjust left position as necessary
    height: hp('16%'), // Adjust height as necessary
    overflow: "hidden",
  },
  divframerSpp2p8: {
    left: wp('60%'), // Adjust left position as necessary
  },
  divframer1l1064p: {
    left: wp('90%'), // Adjust left position as necessary
  },
  divframer1m45co2: {
    left: 0,
    width: wp('30%'), // Adjust width as necessary
    height: hp('16%'), // Adjust height as necessary
    top: 0,
    position: "absolute",
  },
  divframer11lc4h6: {
    height: hp('16%'), // Adjust height as necessary
    overflow: "hidden",
    left: wp('60%'), // Adjust left position as necessary
  },
  divframer1fv8yp7: {
    left: wp('30%'), // Adjust left position as necessary
  },
  divframer1wr33m2: {
    left: 0,
    height: hp('16%'), // Adjust height as necessary
    overflow: "hidden",
  },
  divframer145h7r4: {
    marginLeft: -wp('50%'), // Adjust margin as necessary
    width: wp('120%'), // Adjust width as necessary
    opacity: 0.2,
    top: 0,
  },
  image: {
    marginTop: -hp('25%'), // Adjust margin as necessary
    marginLeft: -wp('50%'), // Adjust margin as necessary
    top: "50%",
    backgroundColor: Color.registerairblackcoBlack,
    width: wp('100%'), // Adjust width as necessary
    zIndex: 0,
    overflow: "hidden",
  },
  frameChild: {
    width: wp('8%'), // Adjust width as necessary
    height: hp('8%'), // Adjust height as necessary
  },
  doItTogetherLiveOn: {
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    color: Color.registerairblackcoNero,
    marginTop: hp('1%'), // Adjust margin as necessary
    alignSelf: "stretch",
  },
  frameContainer: {
    marginLeft: wp('3%'), // Adjust margin as necessary
  },
  frameParent: {
    zIndex: 2,
  },
  applyNow: {
    lineHeight: hp('2%'), // Adjust line height as necessary
    fontWeight: "700",
    paddingLeft: wp('1%'),
    fontFamily: FontFamily.openSansBold,
    color: Color.registerairblackcoAlabaster,
  },
  p: {
    paddingTop: 0,
    paddingBottom: hp('0.1%'), // Adjust padding as necessary
    paddingRight: wp('1%'), // Adjust padding as necessary
    alignSelf: "stretch",
    alignItems: "center",
    paddingLeft: wp('5%'), // Adjust padding as necessary
  },
  divframerZlvey9: {
    borderRadius: Border.br_9xs,
    height: hp('5%'),
    paddingHorizontal: wp('4%'), // Adjust the horizontal padding to move the button within the frame
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    backgroundColor: Color.registerairblackcoLinearCarnationCranberry,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
    paddingHorizontal: Padding.p_sm, // Adjust horizontal padding
    paddingVertical: Padding.p_md,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Footer;

