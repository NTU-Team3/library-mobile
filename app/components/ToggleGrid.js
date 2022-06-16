import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

const ToggleGrid = () => {
    const [list, setList] = React.useState("false");
    const [grid, setGrid] = React.useState("true");
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput style={styles.searchInput} placeholder="Read List" />
        <Image
          source={require("../../assets/grid.png")}
          style={{ width: 20, height: 20, tintColor: "lightgrey" }}
          onPress={() => onChange(item)}
        />
        
        <Image
          source={require("../../assets/3lines.png")}
          style={{ width: 40, height: 40, tintColor: "lightgrey" }}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 10,
  },
  searchInput: {
    width: "80%",
    height: "100%",
    fontSize: 25,
    justifyContent: "flex-start",
  },
  searchbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default ToggleGrid;
