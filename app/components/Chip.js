import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Chip } from "react-native-paper";

const filterList = ["Political", "Technology", "Fiction", "Psychology"];
const FONT_SIZE = 22;

const ChipButtons = ({ select, onChange }) => {
  const [category, setCategory] = React.useState("fiction");

  function selChange(sel) {
    /*console.log(sel);*/
    /*const newSel = e.target.key;
    console.log(newSel);
    setCategory(newSel.toLowerCase());*/
  }

  return (
    <View style={styles.row}>
      {filterList.map((item) => (
        <Chip
          key={item}
          mode="outlined"
          onPress={() => onChange(item)}
          style={styles.chip}
          textStyle={{ fontSize: FONT_SIZE }}
        >
          {item}
        </Chip>
      ))}
    </View>
  );
};

export default ChipButtons;

const styles = StyleSheet.create({
  chip: {
    width: 160,
    marginLeft: 5,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Verdana",
  },
  row: {
    marginTop: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
});
