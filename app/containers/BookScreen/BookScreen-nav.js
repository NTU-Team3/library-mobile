import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BookScreenNav() {
  const pressReviews = () => {
    Alert.alert("Reviews", "Load all reviews", [{ text: "Accept", onPress: () => console.log("Reviews button closed.") }]);
  };

  return (
    <View style={styles.linksDiv}>
      <Ionicons name={"md-reader"} size={14} color={"#FFCE45"}>
        <Text style={styles.txtLinks}>&nbsp;&nbsp;&nbsp;Synopsis</Text>
      </Ionicons>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={pressReviews}>
        <Ionicons name={"md-star-outline"} size={14} color={"#FFCE45"}>
          <Text style={styles.txtLinks}>&nbsp;&nbsp;&nbsp;Reviews</Text>
        </Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  linksDiv: {
    flexDirection: "row",
    paddingHorizontal: "9%",
    paddingVertical: "5.5%",
    paddingBottom: "4.75%",
    backgroundColor: "#222831",
    borderBottomWidth: 0.5,
    borderColor: "rgba(238, 238, 238, 0.5)",
  },

  txtLinks: {
    color: "#FFFFFF",
  },
});
