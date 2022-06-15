import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import dataBook from "../../data/fakeDataBook-ikoh";

export default function ReadItemScreenSummary() {
  const bookSummary = dataBook[1].summary;

  return (
    <ScrollView>
      <View style={styles.txtDivPara}>
        <Text style={styles.txtParaHeader}>Whats It About?</Text>
        <Text style={styles.txtPara}>{bookSummary}</Text>
        <Text style={styles.txtLastLine}>- end of article -</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txtDivPara: {
    paddingTop: "10%",
    padding: "8%",
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
    marginBottom: "10%",
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "justify",
  },

  txtLastLine: {
    marginBottom: "5%",
    marginTop: "10%",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
