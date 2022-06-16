import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Screen from "./Screen";
import data from "../data/fakeData";
import FlatCard from "./FlatCard";
import FullList from "./FullList";
import GridList from "./GridList";
import ToggleGrid from "./ToggleGrid";
import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";
import { TouchableHighlight, TouchableOpacity } from "react-native-web";

const ReadingScreen = (navigation) => {
    const [value, setValue] = useState()
    const [gridView, setgridView] = React.useState("GridList");

    function updateSearch(value) {
      console.log(value)
    }



    return (
    <Screen>
      <SearchBar
      value={value}
      updateSearch={updateSearch}
      style={{}}
      />
      <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput style={styles.searchInput} placeholder="Read List" />         
          
        <TouchableOpacity style={styles.button} onPress={() => setgridView("FullList")}><GridIcon /></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setgridView("FullList")}><ListIcon /></TouchableOpacity>
      </View>
    </View>
      {gridView === ("GridList") ? <FullList data={data}/> : <GridList data={data}/>
}
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
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default ReadingScreen;