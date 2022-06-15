import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BookScreenNav() {
  const reviewsBtnPress = () => {
    Alert.alert(`Reviews`);
  };

  return (
    <View style={styles.linksDiv}>
      <Ionicons name={"md-reader"} size={14} color={"#FFCE45"}>
        <Text style={styles.txtLinks}>&nbsp;&nbsp;&nbsp;Synopsis</Text>
      </Ionicons>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={reviewsBtnPress}>
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
    justifyContent: "flex-start",
    paddingLeft: "8%",
    padding: "5.5%",
    backgroundColor: "#222831",
    borderBottomWidth: 0.5,
    borderBottomColor: "#EEEEEE",
  },

  txtLinks: {
    color: "#FFFFFF",
  },
});
