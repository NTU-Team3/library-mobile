import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Chip } from "react-native-paper";

const filterList = ["Political", "Technology", "Fiction", "Psychology"];
const FONT_SIZE = 12;

const ChipButtons = ({ select, onChange }) => {
  const [category, setCategory] = React.useState("Political");

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
          mode="flat"
          onPress={() => {
            onChange(item);
            setCategory(item);
          }}
          style={category == item ? styles.chipActive : styles.chip}
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
    marginLeft: 5,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  chipActive: {
    marginLeft: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    textAlign: "center",
    textcolor: "white",
    borderColor: "rgba(57, 62, 70, 1)",
    borderStyle: "Solid",
    borderWidth: 0.5,
  },
  row: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
  },
});
