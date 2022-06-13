import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    left: -50,
    backgroundColor: "white",
    borderRadius: 12,
    width: ITEM_WIDTH,
    height: 280,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: "85%",
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CarouselCardItem;
