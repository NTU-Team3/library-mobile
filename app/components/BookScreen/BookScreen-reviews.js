import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import dataBook from "../../data/fakeDataBook";

export default function BookScreenReviews() {
  const bookReviews = dataBook[1].reviews;

  return (
    <ScrollView>
      <View style={styles.txtDivPara}>
        <Text style={styles.txtPara}>{bookReviews}</Text>
      </View>
    </ScrollView>
  );
}
