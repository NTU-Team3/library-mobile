// import { StyleSheet, Text, View, Button } from "react-native";
// import React from "react";

// const ReadingScreen = (navigation) => {
//   return (
//     <View style={styles.container}>
//       <Text>List of current books I am reading </Text>
//       <Button title="Click Here" onPress={() => alert("button clicked!")} />
//     </View>
//   );
// };

// export default ReadingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
// });

import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Screen from "./Screen";
import data from "../data/fakeData";
import FlatCard from "./FlatCard";
import FullList from "./FullList";
import ToggleGrid from "./ToggleGrid";

const ReadingScreen = (navigation) => {
    const [value, setValue] = useState()
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
      {/* <ToggleGrid /> */}
      <FullList data={data}/>
    </Screen>
  );
};

export default ReadingScreen;