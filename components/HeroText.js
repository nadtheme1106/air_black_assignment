import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HeroText = () => {
  return (
    <View style={styles.heroText}>
      <Text style={[styles.title, styles.textTypo]}>
        Professional Online Makeup Course
      </Text>
      <View style={[styles.divframer1htwsli, styles.divframer2kuydlFlexBox]}>
        <View
          style={[styles.divframer171cvlqParent, styles.divframer2kuydlFlexBox]}
        >
          <Image
            style={styles.divframer171cvlqIcon}
            contentFit="cover"
            source={require("../assets/divframer171cvlq.png")}
          />
          <View style={styles.divframerYhfsxu}>
            <View style={styles.p}>
              <Text
                style={[styles.certificationProgramme, styles.rated4855Typo]}
              >
                Certification Programme
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.divframer2kuydl, styles.divframer2kuydlFlexBox]}>
          <Image
            style={styles.divframer1jff7sfIcon}
            contentFit="cover"
            source={require("../assets/divframer1jff7sf.png")}
          />
          <View style={styles.divframer1j9x5ww}>
            <View style={styles.p1}>
              <Text style={[styles.rated4855, styles.rated4855Typo]}>
                Rated 4.85/5
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.points}>
        <View style={styles.viewLayout}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>
            India’s No.1 Online Makeup Course
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>
            Learn by LIVE Do-it-Together Classes
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>
            Unlimited Practise Session to master skills
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    textAlign: "left",
  },
  divframer2kuydlFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rated4855Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
  },
  viewLayout: {
    width: 295,
    flexDirection: "row",
  },
  title: {
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    color: Color.registerairblackcoNero,
    textShadowColor: "rgba(0, 0, 0, 0.05)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  divframer171cvlqIcon: {
    width: 9,
    height: 12,
  },
  certificationProgramme: {
    lineHeight: 12,
    color: Color.registerairblackcoAlabaster,
    textAlign: "left",
  },
  p: {
    paddingTop: 1,
    paddingBottom: 0,
    alignSelf: "stretch",
  },
  divframerYhfsxu: {
    marginLeft: 7,
  },
  divframer171cvlqParent: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.registerairblackcoNero14,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  divframer1jff7sfIcon: {
    width: 11,
    height: 11,
  },
  rated4855: {
    lineHeight: 14,
    color: Color.registerairblackcoCreamCan,
    textAlign: "right",
  },
  p1: {
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 1,
    alignSelf: "stretch",
  },
  divframer1j9x5ww: {
    overflow: "hidden",
    marginLeft: 4,
  },
  divframer2kuydl: {
    borderRadius: Border.br_smi,
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  divframer1htwsli: {
    marginTop: 7.1,
    alignSelf: "stretch",
  },
  icon: {
    width: 14,
    height: 14,
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    color: Color.registerairblackcoAlto,
    marginLeft: 8,
    textAlign: "left",
  },
  view1: {
    marginTop: 8,
  },
  points: {
    marginTop: 7.1,
  },
  heroText: {
    alignSelf: "stretch",
  },
});

export default HeroText;
