import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here..." />
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
});

export default SearchBar;
