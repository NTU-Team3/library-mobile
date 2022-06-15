import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ReadItemScreenImg from "./ReadItemScreen-img";
import ReadItemScreenSummary from "./ReadItemScreen-summary";

export default function ReadItemScreen() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <ReadItemScreenImg />
        <ReadItemScreenSummary />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#222831",
  },
});
