import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Alert } from "react-native";
import dataBook from "../../data/fakeDataBook";

export default function BookScreenSynopsis() {
  const bookTitle = dataBook[1].title;
  const bookSynopsis = dataBook[1].synopsis;
  const bookReviews = dataBook[1].reviews;

  const cartLink = () => {
    Alert.alert(`'${bookTitle}' has been added to cart.`);
  };

  return (
    <ScrollView>
      <View style={styles.txtDivPara}>
        <Text style={styles.txtPara}>{bookSynopsis}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={cartLink}>
          <Text style={styles.btnDiv}>add to cart</Text>
        </TouchableOpacity>
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

  txtPara: {
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "justify",
  },

  btnDiv: {
    alignSelf: "flex-end",
    width: "37%",
    marginTop: "4%",
    marginBottom: "6%",
    paddingTop: "3.25%",
    paddingBottom: "3.25%",
    color: "#222831",
    textAlign: "center",
    borderBottomLeftRadius: 20,
    backgroundColor: "#FFFFFF",
  },
});
