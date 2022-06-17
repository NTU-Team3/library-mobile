import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import dataBook from "../../data/fakeDataBook-ikoh";

export default function ReadItemScreenSummary() {
  const [summary, setSummary] = useState(dataBook[1].summary);

  const pressBack = () => {
    // navigation.goBack();
    Alert.alert("Back", "Go back to Read List page.", [{ text: "Accept", onPress: () => console.log("Back button closed.") }]);
  };

  return (
    <View style={styles.txtDivPara}>
      <Text style={styles.txtParaHeader}>Whats It About?</Text>
      <Text style={styles.txtPara}>{summary}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={pressBack}>
        <Text style={styles.btnDiv}>back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txtDivPara: {
    paddingTop: "10%",
    padding: "9%",
    fontSize: 16,
    backgroundColor: "#222831",
  },

  txtParaHeader: {
    marginBottom: "15%",
    fontSize: 25,
    color: "#FFCE45",
    textAlign: "left",
  },

  txtPara: {
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "justify",
  },

  txtLastLine: {
    marginTop: "7%",
    marginBottom: "3.5%",
    color: "#FFFFFF",
    textAlign: "center",
  },

  btnDiv: {
    alignSelf: "flex-start",
    width: "37%",
    marginTop: "10%",
    marginBottom: "5%",
    paddingVertical: "3.25%",
    color: "#222831",
    textAlign: "center",
    borderBottomLeftRadius: 20,
    backgroundColor: "#FFF",
  },
});
