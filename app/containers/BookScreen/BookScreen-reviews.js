import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import dataBook from "../../data/fakeDataBook-ikoh";

export default function BookScreenReviews() {
  const [book, setBook] = useState({
    reviews: dataBook[1].reviews,
  });

  return (
    <ScrollView>
      <View style={styles.txtDivPara}>
        <Text style={styles.txtPara}>{book.reviews}</Text>
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
});
