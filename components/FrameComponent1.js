import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const FrameComponent1 = ({ selectYourProfession }) => {
  return (
    <View style={styles.frameParent}>
      <Text style={styles.selectYourProfession}>{selectYourProfession}</Text>
      <View style={styles.dropdown}>
        <Text style={styles.select}>Select</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  selectYourProfession: {
    fontSize: FontSize.size_smi_8,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.registerairblackcoEmperor,
    textAlign: "left",
  },
  dropdown: {
    marginTop: 11,
    padding: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.registerairblackcoNero,
  },
  select: {
    fontFamily: FontFamily.registerairblackcoPingFangSCRegular1356,
    fontSize: FontSize.registerairblackcoPingFangSCRegular1356_size,
    color: Color.registerairblackcoSilver,
    textAlign: "left",
  },
});

export default FrameComponent1;
