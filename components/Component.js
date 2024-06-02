import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent1 from "./FrameComponent1";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Component = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.frameParent}>
      <View style={styles.fillTheFormBelowToEnquireWrapper}>
        <Text style={[styles.fillTheForm, styles.submitTypo]}>
          Fill the form below to enquire
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.frameGroup}>
          <View style={styles.enterYourNameParent}>
            <Text style={styles.enterYourName}>*Enter your name</Text>
            <View style={[styles.input, styles.inputFlexBox]}>
              <Text style={[styles.egAneeshaMehra, styles.textTypo]}>
                Eg. Aneesha Mehra
              </Text>
            </View>
          </View>
          <View style={styles.enterYourWhatsappNumberParent}>
            <Text style={styles.enterYourName}>
              *Enter your WhatsApp Number
            </Text>
            <View style={styles.inputFlexBox}>
              <View style={[styles.input1, styles.inputBorder]}>
                <Text style={[styles.text, styles.textTypo]}>+91</Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <View style={[styles.input2, styles.inputBorder]}>
                <View style={styles.divplaceholder}>
                  <Text style={styles.eg0000000000}>Eg. 0000000000</Text>
                </View>
              </View>
            </View>
          </View>
          <FrameComponent1 selectYourProfession="*Select your profession" />
          <FrameComponent1 selectYourProfession="*Select your goal" />
          <FrameComponent1 selectYourProfession="*Select your city" />
        </View>
        <LinearGradient
          style={styles.divframerZlvey9}
          locations={[0, 1]}
          colors={["#f56563", "#e54988"]}
        >
          <View>
            <View style={styles.p}>
              <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  inputFlexBox: {
    marginTop: 11,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    fontSize: FontSize.registerairblackcoPingFangSCRegular1356_size,
    textAlign: "left",
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputBorder: {
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.registerairblackcoNero,
  },
  fillTheForm: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textTransform: "uppercase",
    color: Color.registerairblackcoNero,
    textAlign: "left",
  },
  fillTheFormBelowToEnquireWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorHotpink,
    padding: Padding.p_7xs,
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  enterYourName: {
    fontSize: FontSize.size_smi_8,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.registerairblackcoEmperor,
    textAlign: "left",
  },
  egAneeshaMehra: {
    color: Color.registerairblackcoSilver,
    flex: 1,
  },
  input: {
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.registerairblackcoNero,
  },
  enterYourNameParent: {
    alignSelf: "stretch",
  },
  text: {
    width: 22,
    color: Color.registerairblackcoEmperor,
  },
  vectorIcon: {
    width: 10,
    height: 7,
  },
  input1: {
    width: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    alignItems: "center",
  },
  eg0000000000: {
    color: Color.registerairblackcoSilver,
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    fontSize: FontSize.registerairblackcoPingFangSCRegular1356_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  divplaceholder: {
    overflow: "hidden",
  },
  input2: {
    marginLeft: 11,
    flex: 1,
    flexDirection: "row",
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.registerairblackcoNero,
  },
  enterYourWhatsappNumberParent: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  p: {
    padding: Padding.p_12xs_1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  submit: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    textTransform: "uppercase",
    color: Color.registerairblackcoNero,
    textAlign: "center",
  },
  divframerZlvey9: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 38,
    marginTop: 21,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  form: {
    padding: Padding.p_5xl,
    backgroundColor: Color.registerairblackcoAlabaster,
    alignSelf: "stretch",
  },
  frameParent: {
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Component;
