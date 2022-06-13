import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Chip } from "react-native-paper";

const filterList = ["Popular", "Technology", "Fiction", "Psychology"];
let i = 0;
const FONT_SIZE = 22;

const ChipButtons = () => {
  return (
    <View style={styles.row}>
      <Chip
        icon="heart"
        mode="flat"
        onPress={() => Alert.alert("Popular chip pressed")}
        style={styles.chip}
        textStyle={{
          fontSize: FONT_SIZE,
        }}
      >
        {filterList[i++]}
      </Chip>
      <Chip
        mode="flat"
        onPress={() => Alert.alert("Technology chip pressed")}
        style={styles.chip}
        textStyle={{
          fontSize: FONT_SIZE,
        }}
      >
        {filterList[i++]}
      </Chip>
      <Chip
        mode="outlined"
        onPress={() => Alert.alert("Fiction chip pressed")}
        selectedColor="red"
        style={styles.chip}
        textStyle={{
          fontSize: FONT_SIZE,
        }}
      >
        {filterList[i++]}
      </Chip>
      <Chip
        style={styles.chip}
        textStyle={{
          fontSize: FONT_SIZE,
        }}
      >
        {filterList[i++]}
      </Chip>
    </View>
  );
};

export default ChipButtons;

const styles = StyleSheet.create({
  chip: {
    width: 160,
    marginLeft: 5,
    marginBottom: 5,
  },
  row: {
    marginTop: 2,
    flexDirection: "row",
    flexWrap: "wrap",

    paddingHorizontal: 12,
  },
});
