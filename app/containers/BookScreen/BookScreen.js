import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import BookScreenImg from "../../containers/BookScreen/BookScreen-img";
import BookScreenNav from "../../containers/BookScreen/BookScreen-nav";
import BookScreenSynopsis from "../../containers/BookScreen/BookScreen-synopsis";

export default function BookScreen() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <BookScreenImg />
        <BookScreenNav />
        <BookScreenSynopsis />
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
