import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Alert } from "react-native";
import dataBook from "../../data/fakeDataBook-ikoh";

export default function BookScreenSynopsis() {
  // Set the below as a single obj instead?
  const [book, setBook] = useState({
    title: dataBook[1].title,
    synopsis: dataBook[1].synopsis,
    reviews: dataBook[1].reviews,
    imgPath: dataBook[1].imgpath,
  });

  const pressCart = () => {
    // setCart here
    Alert.alert("Cart", `To add '${book.title}' to cart.`, [{ text: "Accept", onPress: () => console.log("Cart button closed.") }]);
  };

  return (
    <ScrollView>
      <View style={styles.txtDivPara}>
        <Text style={styles.txtPara}>{book.synopsis}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={pressCart}>
          <Text style={styles.btnDiv}>add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txtDivPara: {
    paddingTop: "10%",
    padding: "9%",
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
    marginTop: "10%",
    marginBottom: "5%",
    paddingVertical: "3.25%",
    color: "#222831",
    textAlign: "center",
    borderBottomLeftRadius: 20,
    backgroundColor: "#FFF",
  },
});
