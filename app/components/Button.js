import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const _Button = ({ buttonText }) => {
  let [fontsLoaded] = useFonts({
    InterRegular: require("../../assets/fonts/InterRegular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 135,
    height: 40,
    borderBottomLeftRadius: 20,
    backgroundColor: "rgba(34, 40, 49, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: "rgba(238, 238, 238, 1)",
  },
});

export default _Button;
