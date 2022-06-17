import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ReadItemScreenImg from "./ReadItemScreen-img";
import ReadItemScreenSummary from "./ReadItemScreen-summary";

export default function ReadItemScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ReadItemScreenImg />
      <ReadItemScreenSummary />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
});
