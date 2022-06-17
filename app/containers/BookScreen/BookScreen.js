import React from "react";
import { StyleSheet, View } from "react-native";
import BookScreenImg from "../../containers/BookScreen/BookScreen-img";
import BookScreenNav from "../../containers/BookScreen/BookScreen-nav";
import BookScreenSynopsis from "../../containers/BookScreen/BookScreen-synopsis";

export default function BookScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BookScreenImg />
      <BookScreenNav />
      <BookScreenSynopsis />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
});
