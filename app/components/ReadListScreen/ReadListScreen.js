import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ReadListScreenImg from "../ReadListScreen/ReadListScreen-img";
// import ReadListScreenSummary from "../ReadListScreen/ReadListScreen-summary";

export default function ReadListScreen() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <ReadListScreenImg />
        {/* <ReadListScreenSummary /> */}
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
