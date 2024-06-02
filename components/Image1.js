import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import BeautyClubLogoBlack from "./BeautyClubLogoBlack";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Image1 = () => {
  return (
    <View style={styles.image}>
      <View style={styles.divframer145h7r4}>
        <View style={[styles.divframer1w3xset, styles.divframerLayout]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/zmxqwkfbejrqapbt6wdbyw9c77apng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframerBblki7, styles.divframerPosition1]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/fkdjytq0z10pkcimvgg2xf3q0jpg.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1ycl6m, styles.divframerLayout]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/olytuxqtpzi5x0j9jbbgcytfopng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1dnhb97, styles.divframerLayout]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/nus134xofhur4fscnynn0hazwuejpg.png")}
            />
          </View>
        </View>
        <View style={[styles.divframerEavpp8, styles.divframerPosition]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/nxkofntfy9ikxcpxptowzhq5cdupng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframerW2t539, styles.divframerPosition1]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/brdpcuqjd3f8gbyuk0xrimiepng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframerSpp2p8, styles.divframerPosition]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/nwplmeuuorxeizilywivinmrdsmpng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1l1064p, styles.divframerPosition]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/3roobvkysvltma83f4b1idfc2spng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1m45co2, styles.divframerLayout]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/6xvq22ho5urja40fbslgzxjwmapng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer11lc4h6, styles.divframerPosition1]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/igiz71nklzdzeqhhjjj6zzflbgpng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1fv8yp7, styles.divframerPosition]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/ulgo1lvjg0qqwvsnruetz3h9eimpng.png")}
            />
          </View>
        </View>
        <View style={[styles.divframer1wr33m2, styles.divframerPosition1]}>
          <View style={[styles.div, styles.divframerPosition1]}>
            <Image
              style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
              contentFit="cover"
              source={require("../assets/bijgdu7wrx4u7qhuhojdtr06lmpng.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.airblackBeautyClubLogoParent}>
        <BeautyClubLogoBlack
          beautyClubLogoBlackBeauty={require("../assets/airblack-beauty-club-logo.png")}
          beautyClubLogoBlackWidth={wp('18.4%')}  // Calculated as (69/375) * 100
          beautyClubLogoBlackHeight={hp('3.89%')} // Calculated as (28/720) * 100
        />
        <Text style={styles.presents}>Presents</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divframerLayout: {
    height: hp('17.36%'),  // Calculated as (125/720) * 100
    overflow: "hidden",
  },
  divframerPosition1: {
    bottom: 0,
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    position: "absolute",
  },
  divframerPosition: {
    top: hp('17.36%'),  // Calculated as (125/720) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    position: "absolute",
    overflow: "hidden",
  },
  zmxqwkfbejrqapbt6wdbyw9c77apnIcon: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    overflow: "hidden",
  },
  div: {
    justifyContent: "center",
    left: 0,
    top: 0,
  },
  divframer1w3xset: {
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    top: 0,
    position: "absolute",
    left: wp('66.66%'),  // Calculated as (250/375) * 100
  },
  divframerBblki7: {
    right: 0,
    height: hp('17.36%'), // Calculated as (125/720) * 100
    overflow: "hidden",
  },
  divframer1ycl6m: {
    left: wp('33.33%'),  // Calculated as (125/375) * 100
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    top: 0,
    position: "absolute",
  },
  divframer1dnhb97: {
    left: wp('100%'),  // Calculated as (375/375) * 100
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    top: 0,
    position: "absolute",
  },
  divframerEavpp8: {
    left: 0,
  },
  divframerW2t539: {
    left: wp('33.33%'),  // Calculated as (125/375) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    overflow: "hidden",
  },
  divframerSpp2p8: {
    left: wp('66.66%'),  // Calculated as (250/375) * 100
  },
  divframer1l1064p: {
    left: wp('100%'),  // Calculated as (375/375) * 100
  },
  divframer1m45co2: {
    left: 0,
    width: wp('33.33%'),  // Calculated as (125/375) * 100
    height: hp('17.36%'), // Calculated as (125/720) * 100
    top: 0,
    position: "absolute",
  },
  divframer11lc4h6: {
    height: hp('17.36%'), // Calculated as (125/720) * 100
    overflow: "hidden",
    left: wp('66.66%'),  // Calculated as (250/375) * 100
  },
  divframer1fv8yp7: {
    left: wp('33.33%'),  // Calculated as (125/375) * 100
  },
  divframer1wr33m2: {
    left: 0,
    height: hp('17.36%'), // Calculated as (125/720) * 100
    overflow: "hidden",
  },
  divframer145h7r4: {
    marginLeft: wp('-51.04%'),  // Calculated as (-255.2/500) * 100
    left: "50%",
    width: wp('136%'),  // Calculated as (510/375) * 100
    height: hp('52.08%'), // Calculated as (375/720) * 100
    opacity: 0.2,
    top: 0,
    position: "absolute",
  },
  presents: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.registerairblackcoNero,
    textAlign: "left",
    marginTop: hp('1.67%'),  // Calculated as (12/720) * 100
  },
  airblackBeautyClubLogoParent: {
    marginTop: hp('-3.61%'),  // Calculated as (-26/720) * 100
    top: "50%",
    left: wp('6.4%'),  // Calculated as (24/375) * 100
    width: wp('87.2%'),  // Calculated as (327/375) * 100
    alignItems: "center",
    position: "absolute",
  },
  image: {
    backgroundColor: Color.registerairblackcoBlack,
    width: wp('100%'),  // Full screen width
    height: hp('17.22%'),  // Calculated as (124/720) * 100
    overflow: "hidden",
  },
});

export default Image1;

