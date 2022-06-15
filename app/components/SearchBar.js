import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Image
          source={require("../../assets/search.png")}
          style={{ width: 20, height: 20, tintColor: "white" }}
        />

        <TextInput style={styles.searchInput} placeholder="Search here..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFCE45",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 18,
  },
  searchbar: {
    flexDirection: "row",
    marginLeft: 10,
  },
});

export default SearchBar;
