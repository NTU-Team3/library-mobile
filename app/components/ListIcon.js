import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function ListIcon({ funct }) {
  return (
    <TouchableOpacity
      onPress={() => {
        funct("ListIcon");
      }}
      style={styles.container}
    >
    <Image
        source={require("../../assets/3lines.png")}
        style={{
          width: 15,
          height: 15,
          resizeMode: "cover",
          tintColor: "lightgrey",
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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