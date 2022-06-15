import { Text, StyleSheet } from "react-native";
import React from "react";

const Greeting = ({ children, numberOfLines = 1, size = 30 }) => {
  function getDateTime() {
    return new Date().toLocaleString();
  }
  return (
    <>
      <Text
        numberOfLines={numberOfLines}
        style={{ fontWeight: "bold", fontSize: size, fontFamily: "Roboto" }}
      >
        {children}
      </Text>
      <Text style={styles.datetime}>{getDateTime()}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  datetime: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 30,
  },
});

export default Greeting;
