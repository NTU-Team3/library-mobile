import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default Screen;
