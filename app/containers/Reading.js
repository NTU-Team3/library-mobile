import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Screen from "./Screen";
import data from "../data/fakeData";
import FullList from "../components/FullList";
import GridList from "../components/GridList";
import GridIcon from "../components/GridIcon";
import ListIcon from "../components//ListIcon";
import { TouchableHighlight, TouchableOpacity } from "react-native-web";

const ReadingScreen = (navigation) => {
  const [value, setValue] = useState();
  const [gridView, setgridView] = React.useState("GridIcon");

  function updateSearch(value) {
    console.log("abc");
  }
  function updateView(string) {
    setgridView(string);
  }

  return (
    <Screen>
      <SearchBar value={value} updateSearch={updateSearch} style={{}} />
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <TextInput style={styles.searchInput} placeholder="Read List" />
          <GridIcon funct={updateView} />
          <ListIcon funct={updateView} />
        </View>
      </View>
      {gridView === "GridIcon" ? (
        <GridList data={data} />
      ) : (
        <FullList data={data} />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default ReadingScreen;
