import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ReadingScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>List of current books I am reading </Text>
      <Button title="Click Here" onPress={() => alert("button clicked!")} />
    </View>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
